const buffalo = (minute) => {
  if (
    (minute === undefined) ||
    (minute < 0) ||
    (minute >= 60) ||
    (minute === 'NaN')
  ) {
    return;
  }

  if (minute <= 29) {
    return 'right';
  }

  return 'left';
};

export default buffalo;