const buffalo = (minute) => {
  if (minute === 30 || minute === 59) {
    return 'left';
  }

  return 'right';
};

export default buffalo;