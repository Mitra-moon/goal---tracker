import { useGoals } from "../context/GoalContext";
import { useSettings } from "../context/SettingsContext";
import { useState } from "react";
import GoalCard from "../components/GoalCard";

import {
  Stack,
  Button,
  Typography,
  TextField,
  Grid
} from "@mui/material";

export default function Goals() {
  const { goals } = useGoals();
  const { t } = useSettings();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = goals
    .filter(g =>
      filter === "all" ? true : g.status === filter
    )
    .filter(g =>
      g.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">{t.goals}</Typography>

      <TextField
        placeholder={t.search}
        fullWidth
        sx={{ mt: 2 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Stack direction="row" spacing={1} mt={2}>
        <Button onClick={() => setFilter("all")}>{t.all}</Button>
        <Button onClick={() => setFilter("active")}>{t.active}</Button>
        <Button onClick={() => setFilter("completed")}>{t.completed}</Button>
        <Button onClick={() => setFilter("paused")}>{t.paused}</Button>
      </Stack>

      <Grid container spacing={2} mt={2}>
        {filtered.map(goal => (
          <Grid item xs={12} md={6} key={goal.id}>
            <GoalCard goal={goal} />
          </Grid>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Typography mt={2}>{t.noGoals}</Typography>
      )}
    </div>
  );
}