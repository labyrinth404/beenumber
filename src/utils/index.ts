export const calculateIteration = (
  maxNumber: number,
  bonus: number = 0
): number => {
  return Math.ceil(Math.log(maxNumber) / Math.log(2)) + bonus;
};

export const randomNumber = (max: number) => {
  return Math.ceil(Math.random() * max);
};
