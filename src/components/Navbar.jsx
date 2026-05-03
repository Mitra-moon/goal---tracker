import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";

export default function Navbar() {
  const { t } = useSettings();

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <Button color="inherit" component={Link} to="/">
          {t.dashboard}
        </Button>

        <Button color="inherit" component={Link} to="/goals">
          {t.goals}
        </Button>

        <Button color="inherit" component={Link} to="/goals/new">
          {t.newGoal}
        </Button>

        <Button color="inherit" component={Link} to="/categories">
          {t.categories}
        </Button>

        <Button color="inherit" component={Link} to="/archive">
          {t.archive}
        </Button>

        <Button color="inherit" component={Link} to="/settings">
          {t.settings}
        </Button>
      </Toolbar>
    </AppBar>
  );
}