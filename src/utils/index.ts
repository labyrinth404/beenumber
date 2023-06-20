export const calculateIteration = (maxNumber: number): number => {
  return Math.ceil(Math.log(maxNumber) / Math.log(2));
};
