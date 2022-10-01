/* eslint-disable no-await-in-loop */
const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const sharp = require('sharp');
const AdmZ = require('adm-zip');

const app = express();

app.use(bp.json({ limit: '500mg' }));
app.use(bp.urlencoded({ extended: true, limit: '500mg', parameterLimit: '6000000' }));
app.use(cors({
  origin: '*',
  optionsSuccessStatus: '204',
  allowedHeaders: '*',
  methods: ['POST', 'GET', 'OPTIONS'],
  preflightContinue: false,
}));

app.use(express.static('public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.post('/postImg', async (req, res) => {
  const { id } = req.body;
  const dirPath = `${__dirname}/uploads/${id}/`;
  fs.mkdirSync(dirPath);

  setTimeout(() => {
    fs.readdirSync(dirPath).forEach((fileName) => {
      fs.rmSync(dirPath + fileName);
    });
    fs.rmdirSync(dirPath);
    // after 1h delete items and the directory in the storage
  }, 3600000);

  const { files } = req;
  const fileIdListed = Object.keys(files);

  for (let i = 0; i !== fileIdListed.length; i += 1) {
    const fileId = fileIdListed[i];
    const file = files[fileId];
    const filePath = `${dirPath}/${fileId}.webp`;
    await sharp(file.data).webp({ quality: 20 }).toFile(filePath);
  }

  const dirData = fs.readdirSync(dirPath);

  const response = {};
  dirData.forEach((fileName) => {
    const { size } = fs.statSync(dirPath + fileName);
    response[fileName.split('.webp')[0]] = { size };
  });
  res.send({ id, data: response });
});

app.get('/getImg/:dirId/:id', (req, res) => {
  const { dirId } = req.params;
  const { id } = req.params;
  if (id !== 'null') {
    const filePath = `${__dirname}/uploads/${dirId}/${id}.webp`;
    res.download(filePath);
    res.send({ status: true, msg: 'successfully download' });
  } else {
    const zip = new AdmZ();
    const dirPath = `${__dirname}/uploads/${dirId}/`;
    const dirData = fs.readdirSync(dirPath);
    dirData.forEach((fileName) => {
      zip.addLocalFile(dirPath + fileName);
    });
    const data = zip.toBuffer();
    const finalNameAfterDl = 'downloaded_file.zip';
    res.set('Content-Type', 'application/octet-stream');
    res.set('Content-Disposition', `attachment; filename=${finalNameAfterDl}`);
    res.set('Content-Length', data.length);
    res.send(data);
  }
});

app.get('*', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.send('404 Error');
});

app.listen(8080, () => {
});
