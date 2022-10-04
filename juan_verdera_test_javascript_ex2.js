function verifyData(dataToVerify) {
  isDataValid = true;
  dataToVerify.forEach(cell => {
    if (cell < 0 || 10 < cell || dataToVerify.length !== new Set(dataToVerify).size) {
        isDataValid = false;
    }
  });
  return isDataValid;
}