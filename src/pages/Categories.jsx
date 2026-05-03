import { useGoals } from "../context/GoalContext";
import { Typography, Grid, Card, CardContent } from "@mui/material";

export default function Categories() {
  const { goals } = useGoals();

  const grouped = {};

  goals.forEach(g => {
    if (!grouped[g.category]) grouped[g.category] = [];
    grouped[g.category].push(g);
  });

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Categories</Typography>

      <Grid container spacing={2} mt={2}>
        {Object.keys(grouped).map(cat => (
          <Grid item xs={12} md={4} key={cat}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6">{cat}</Typography>

                <Typography>
                  Goals: {grouped[cat].length}
                </Typography>

                <Typography>
                  Completed:{" "}
                  {grouped[cat].filter(g => g.status === "completed").length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}