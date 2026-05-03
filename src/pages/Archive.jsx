import { useGoals } from "../context/GoalContext";
import { Typography, Grid, Button } from "@mui/material";
import GoalCard from "../components/GoalCard";

export default function Archive() {
  const { goals, restoreGoal } = useGoals();

  const completed = goals.filter(g => g.status === "completed");

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Archive</Typography>

      <Grid container spacing={2} mt={2}>
        {completed.map(goal => (
          <Grid item xs={12} md={6} key={goal.id}>
            <GoalCard goal={goal} />
            <Button onClick={() => restoreGoal(goal.id)}>
              Restore
            </Button>
          </Grid>
        ))}
      </Grid>

      {completed.length === 0 && (
        <Typography mt={2}>No completed goals</Typography>
      )}
    </div>
  );
}