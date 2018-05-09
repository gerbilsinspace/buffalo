const buffalo = (minute) => {
  if (minute <= 29) {
    return 'right';
  }

  return 'left';
};

export default buffalo;