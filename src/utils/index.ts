export const calculateIteration = (
  maxNumber: number,
  bonus: number = 0
): number => {
  let result = Math.ceil(Math.log(maxNumber) / Math.log(2)) + bonus;
  if (result < 0) {
    return 2;
  }
  return result;
};

export const randomNumber = (max: number) => {
  return Math.ceil(Math.random() * max);
};
