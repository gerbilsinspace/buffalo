const buffalo = (minute) => {
  if (minute === undefined) {
    return;
  }

  if (minute < 0 || minute >= 60) {
    return;
  }

  if (minute <= 29) {
    return 'right';
  }

  return 'left';
};

export default buffalo;