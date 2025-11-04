import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F9FAFB",     // var(--background)
      paper: "#FFFFFF",       // var(--card)
    },
    primary: {
      main: "#111827",        // var(--primary)
      contrastText: "#FFFFFF" // var(--primary-foreground)
    },
    secondary: {
      main: "#F3F4F6",        // var(--secondary)
      contrastText: "#111827" // var(--secondary-foreground)
    },
    text: {
      primary: "#111827",     // var(--foreground)
      secondary: "#6B7280",   // var(--muted-foreground)
    },
    divider: "#E5E7EB",       // var(--border)
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  shape: { borderRadius: 12 },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    mode: "dark",
    background: {
      default: "#0F172A",     // var(--background)
      paper: "#1E293B",       // var(--card)
    },
    primary: {
      main: "#F9FAFB",        // var(--primary)
      contrastText: "#0F172A" // var(--primary-foreground)
    },
    text: {
      primary: "#E5E7EB",     // var(--foreground)
      secondary: "#94A3B8",   // var(--muted-foreground)
    },
    divider: "#334155",       // var(--border)
  },
});
