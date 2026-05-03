import { Button, Stack, Typography, Paper } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function Settings() {
  const { lang, setLang, t } = useSettings();

  return (
    <Paper sx={{ p: 3, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h4">{t.settings}</Typography>

      <Stack direction="row" spacing={2} mt={2}>
        <Button variant="contained" onClick={() => setLang("en")}>
          English
        </Button>
        <Button variant="contained" onClick={() => setLang("fa")}>
          فارسی
        </Button>
      </Stack>

      <Typography mt={2}>
        {t.language || "Language"}: {lang}
      </Typography>
    </Paper>
  );
}