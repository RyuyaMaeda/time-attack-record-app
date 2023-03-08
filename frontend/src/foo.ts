const sum = (...a: number[]) => {
  return a.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

export default sum;
