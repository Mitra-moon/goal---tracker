import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Stack
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGoals } from "../context/GoalContext";

export default function GoalCard({ goal }) {
  const { addProgress, deleteGoal, togglePause } = useGoals();

  if (!goal) return null;

  const progress = goal.progress || 0;
  const target = goal.target || 1;
  const percent = Math.min((progress / target) * 100, 100);

  return (
    <Card sx={{ borderRadius: 3, p: 1 }}>
      <CardContent>
        <Typography variant="h6">
          <Link to={`/goals/${goal.id}`}>
            {goal.icon || "🎯"} {goal.title}
          </Link>
        </Typography>

        <Chip
          label={goal.category || "General"}
          sx={{ mt: 1 }}
          color="secondary"
        />

        <Typography sx={{ mt: 1 }}>
          {progress} / {target}
        </Typography>

        <LinearProgress value={percent} variant="determinate" sx={{ my: 1 }} />

        <Typography variant="body2">
          Status: {goal.status}
        </Typography>

        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          <Button size="small" onClick={() => addProgress(goal.id)}>
            + Progress
          </Button>

          <Button size="small" onClick={() => togglePause(goal.id)}>
            {goal.status === "paused" ? "Resume" : "Pause"}
          </Button>

          <Button
            size="small"
            component={Link}
            to={`/goals/${goal.id}`}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            onClick={() => deleteGoal(goal.id)}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}