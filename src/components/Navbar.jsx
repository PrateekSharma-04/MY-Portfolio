import { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../context/ThemeContext.js";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Handle scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);

      const scrollPos = window.scrollY + 120;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        p: 2,
        backgroundColor: "var(--background)",
        height: "100%",
      }}
    >
      {/* Logo in Drawer */}
      <Box
        component="img"
        src="/ps-logo.png"
        alt="PS Logo"
        sx={{
          height: 50,
          width: "auto",
          mx: "auto",
          mb: 2,
          display: "block",
        }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleScrollToSection(item.id)}
              sx={{
                textAlign: "center",
                color:
                  activeSection === item.id
                    ? "var(--chart-1)"
                    : "var(--foreground)",
                "&:hover": { color: "var(--chart-1)" },
              }}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled
            ? isDark
              ? "rgba(15, 23, 42, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          color: "var(--foreground)",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.2)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.3s ease-in-out",
          paddingY: isScrolled ? 0 : 0.5,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              transition: "transform 0.3s ease, filter 0.3s ease",
              "&:hover": {
                transform: "scale(1.07)",
                filter: "drop-shadow(0 0 8px var(--chart-1))",
              },
            }}
            onClick={() => handleScrollToSection("home")}
          >
            <Box
              component="img"
              src="/ps-logo.png"
              alt="PS Logo"
              sx={{
                height: 40,
                width: "auto",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                letterSpacing: 0.5,
                transition: "color 0.4s ease",
                "&:hover": { color: "var(--chart-1)" },
              }}
            >
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                sx={{
                  position: "relative",
                  color:
                    activeSection === item.id
                      ? "var(--chart-1)"
                      : "var(--foreground)",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  px: 1.5,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%)",
                    width: activeSection === item.id ? "100%" : "0",
                    height: "2px",
                    background:
                      "linear-gradient(to right, var(--chart-1), var(--primary))",
                    borderRadius: "2px",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover": {
                    color: "var(--chart-1)",
                  },
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            ))}

            <IconButton
              onClick={() => setIsDark((prev) => !prev)}
              sx={{
                color: "var(--foreground)",
                "&:hover": { color: "var(--chart-1)" },
              }}
            >
              {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton
              onClick={() => setIsDark((prev) => !prev)}
              sx={{
                color: "var(--foreground)",
                "&:hover": { color: "var(--chart-1)" },
              }}
            >
              {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "var(--foreground)",
                "&:hover": { color: "var(--chart-1)" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
