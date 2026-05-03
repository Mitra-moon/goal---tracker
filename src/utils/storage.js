export const saveGoals = (goals) => {
  localStorage.setItem("goals", JSON.stringify(goals));
};

export const loadGoals = () => {
  const data = localStorage.getItem("goals");
  return data ? JSON.parse(data) : [];
};

export const saveStats = (stats) => {
  localStorage.setItem("stats", JSON.stringify(stats));
};

export const loadStats = () => {
  const data = localStorage.getItem("stats");
  return data
    ? JSON.parse(data)
    : { xp: 0, streak: 0, completed: 0, lastDate: null };
};