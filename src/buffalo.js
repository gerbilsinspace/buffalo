const buffalo = (minute) => {
  if (minute === 30) {
    return 'left';
  }

  return 'right';
};

export default buffalo;