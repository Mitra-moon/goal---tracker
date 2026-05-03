import { useGoals } from "../context/GoalContext";
import { useSettings } from "../context/SettingsContext";
import GoalCard from "../components/GoalCard";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";

export default function Dashboard() {
  const { goals = [], stats = {} } = useGoals();
  const { t } = useSettings();

  const completed = goals.filter(g => g.status === "completed");
  const active = goals.filter(g => g.status !== "completed");

  const percent =
    goals.length === 0
      ? 0
      : Math.round((completed.length / goals.length) * 100);

  return (
    <Box p={2}>
      <Typography variant="h4">{t.dashboard}</Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={3}>
          <Card><CardContent>
            <Typography>{t.completion}</Typography>
            <Typography variant="h5">{percent}%</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card><CardContent>
            <Typography>{t.xp}</Typography>
            <Typography variant="h5">{stats.xp || 0}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card><CardContent>
            <Typography>{t.streak}</Typography>
            <Typography variant="h5">{stats.streak || 0}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card><CardContent>
            <Typography>{t.completed}</Typography>
            <Typography variant="h5">{completed.length}</Typography>
          </CardContent></Card>
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button variant="contained" component={Link} to="/goals/new">
          + {t.newGoal}
        </Button>

        <Button variant="outlined" component={Link} to="/goals" sx={{ ml: 2 }}>
          {t.goals}
        </Button>
      </Box>

      <Typography variant="h5" mt={4}>
        {t.activeGoals}
      </Typography>

      <Grid container spacing={2} mt={1}>
        {active.length === 0 && <Typography>{t.noGoals}</Typography>}

        {active.map(goal => (
          <Grid item xs={12} md={6} key={goal.id}>
            <GoalCard goal={goal} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" mt={4}>
        {t.completedGoals}
      </Typography>

      <Grid container spacing={2} mt={1}>
        {completed.map(goal => (
          <Grid item xs={12} md={6} key={goal.id}>
            <GoalCard goal={goal} />
          </Grid>
        ))}
      </Grid>

      {completed.length > 0 && (
        <Button component={Link} to="/archive" sx={{ mt: 2 }}>
          {t.viewArchive}
        </Button>
      )}
    </Box>
  );
}