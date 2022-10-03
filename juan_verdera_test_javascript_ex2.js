function verifyData(dataToVerify) {
  isDataValid = true;
  dataToVerify.forEach(cell => {
    if (cell < 0 || 10 < cell) {
        isDataValid = false;
    }
  });
  return isDataValid;
}