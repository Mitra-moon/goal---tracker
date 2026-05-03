export const calculateProgress = (progress, target) => {
  return Math.min(Math.round((progress / target) * 100), 100);
};

export const isCompleted = (progress, target) => {
  return progress >= target;
};