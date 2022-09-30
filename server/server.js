/* eslint-disable no-await-in-loop */
const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const sharp = require('sharp');
// const uploadImg = require('./util/uploadImg');
// const admZip = require('zip')

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
    // 'Content-Type' :'text/jsx',
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.post('/postImg', async (req, res) => {
  const { id } = req.body;
  const dirPath = `${__dirname}/uploads/${id}/`;
  fs.mkdirSync(dirPath);

  const { files } = req;
  const fileIdListed = Object.keys(files);

  for (let i = 0; i !== fileIdListed.length; i += 1) {
    const fileId = fileIdListed[i];
    const file = files[fileId];
    const filePath = `${dirPath}/${fileId}.webp`;
    // const result = await uploadImg(file, filePath);
    await sharp(file.data).webp({ quality: 20 }).toFile(filePath);
  }

  const dirData = fs.readdirSync(dirPath);

  const response = {};
  dirData.forEach((fileName) => {
    const { size } = fs.statSync(dirPath + fileName);
    response[fileName.split('.webp')[0]] = { size };
  });

  console.log('success saved');
  res.send({ id, data: response });
});

app.get('/getImg/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const filePath = `${__dirname}/uploads/${id}/0.webp`;
  res.download(filePath, '0.webp', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('succ');
  });
});

app.get('*', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.send('404 Error');
});

app.listen(8080, () => {
});
