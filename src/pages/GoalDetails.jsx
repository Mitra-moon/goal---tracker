import { useParams } from "react-router-dom";
import { useGoals } from "../context/GoalContext";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function GoalDetails() {
  const { id } = useParams();
  const { goals, addProgress, togglePause, updateGoal } = useGoals();

  const goal = goals.find(g => String(g.id) === String(id));

  if (!goal) return <Typography>Goal not found</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4">{goal.title}</Typography>

      <Typography>Category: {goal.category}</Typography>
      <Typography>Status: {goal.status}</Typography>
      <Typography>
        Progress: {goal.progress} / {goal.target}
      </Typography>

      <Stack direction="row" spacing={2} mt={2}>
        <Button onClick={() => addProgress(goal.id)}>
          + Progress
        </Button>

        <Button onClick={() => togglePause(goal.id)}>
          Pause / Resume
        </Button>

        <Button
          onClick={() =>
            updateGoal(goal.id, { status: "completed" })
          }
        >
          Complete
        </Button>
      </Stack>

      <Typography mt={3}>Logs:</Typography>

      {goal.logs.map((log, i) => (
        <Typography key={i}>
          {log.date} (+{log.amount})
        </Typography>
      ))}
    </Box>
  );
}