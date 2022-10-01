const makeReadableSizes = (size) => {
  if (!size) { return null; }
  let readableSize = size;
  const sizeString = size.toString();
  const sizeLength = sizeString.length;

  if (sizeLength >= 4 && sizeLength < 7) {
    readableSize = `${sizeString.slice(0, sizeLength - 3)}Kb`;
  } else if (sizeLength >= 7 && sizeLength < 10) {
    readableSize = `${sizeString.slice(0, sizeLength - 6)}.${sizeString.slice(1, 2)}Mg`;
  } else {
    readableSize = `${sizeString.slice(0, sizeLength)}B`;
  }
  return readableSize;
};

export default makeReadableSizes;
