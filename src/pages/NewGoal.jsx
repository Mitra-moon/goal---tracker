import { useState } from "react";
import { useGoals } from "../context/GoalContext";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

import {
  TextField,
  Button,
  MenuItem,
  Stack,
  Typography,
  Paper
} from "@mui/material";

export default function NewGoal() {
  const { addGoal } = useGoals();
  const { t } = useSettings();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    target: "",
    category: "Personal",
    type: "daily",
    startDate: "",
    endDate: "",
    color: "#7b2ff7",
    icon: "🎯",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.target) {
      alert("Fill required fields");
      return;
    }

    addGoal({
      ...form,
      target: Number(form.target)
    });

    navigate("/");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        {t.createGoal}
      </Typography>

      <Stack spacing={2}>
        <TextField
          label={t.title}
          name="title"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label={t.target}
          name="target"
          type="number"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          select
          label={t.category}
          name="category"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
        </TextField>

        <TextField
          select
          label="Type"
          name="type"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="count">Count</MenuItem>
          <MenuItem value="time">Time</MenuItem>
        </TextField>

        <TextField
          label={t.startDate}
          type="date"
          name="startDate"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label={t.endDate}
          type="date"
          name="endDate"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="Color"
          type="color"
          name="color"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Icon (emoji)"
          name="icon"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label={t.notes}
          name="notes"
          multiline
          rows={3}
          onChange={handleChange}
          fullWidth
        />

        <Button variant="contained" onClick={handleSubmit}>
          {t.createGoal}
        </Button>
      </Stack>
    </Paper>
  );
}