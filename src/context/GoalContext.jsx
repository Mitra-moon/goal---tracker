import { createContext, useContext, useEffect, useState } from "react";
import { saveGoals, loadGoals, saveStats, loadStats } from "../utils/storage";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
const [goals, setGoals] = useState(loadGoals() || []);
const [stats, setStats] = useState(loadStats());

  useEffect(() => saveGoals(goals), [goals]);
  useEffect(() => saveStats(stats), [stats]);

  const addGoal = (goal) => {
    setGoals([
      ...goals,
      {
        ...goal,
        id: Date.now(),
        progress: 0,
        status: "active",
        logs: [],
        createdAt: new Date().toISOString()
      }
    ]);
  };

  const updateGoal = (id, updates) => {
    setGoals(goals.map(g => g.id === id ? { ...g, ...updates } : g));
  };

  const deleteGoal = (id) => {
    if (!confirm("Delete this goal?")) return;
    setGoals(goals.filter(g => g.id !== id));
  };

  const togglePause = (id) => {
    setGoals(goals.map(g =>
      g.id === id
        ? { ...g, status: g.status === "paused" ? "active" : "paused" }
        : g
    ));
  };

  const restoreGoal = (id) => {
    setGoals(goals.map(g =>
      g.id === id ? { ...g, status: "active" } : g
    ));
  };

  const addProgress = (id) => {
    const today = new Date().toDateString();

    setGoals(prevGoals => {
      return prevGoals.map(g => {
        if (g.id !== id) return g;

        const newProgress = g.progress + 1;
        const completed = newProgress >= g.target;

        return {
          ...g,
          progress: newProgress,
          status: completed ? "completed" : g.status,
          logs: [...g.logs, { date: today, amount: 1 }]
        };
      });
    });

    setStats(prev => {
      const today = new Date().toDateString();

      let newStreak = prev.streak;

      if (prev.lastDate) {
        const diff =
          (new Date(today) - new Date(prev.lastDate)) /
          (1000 * 60 * 60 * 24);

        if (diff === 1) newStreak += 1;
        else if (diff > 1) newStreak = 1;
      } else {
        newStreak = 1;
      }

      return {
        ...prev,
        xp: prev.xp + 20,
        streak: newStreak,
        lastDate: today
      };
    });
  };

  return (
    <GoalContext.Provider value={{
      goals,
      stats,
      addGoal,
      updateGoal,
      deleteGoal,
      togglePause,
      addProgress,
      restoreGoal
    }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoals = () => useContext(GoalContext);