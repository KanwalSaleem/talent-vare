import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Assets } from "../../assets/Assets";
import { Search, StyledInputBase, headerStyles } from "../../styles/HeaderStyles";

const navItems = [
  "Find Jobs",
  "Top Companies",
  "Job Tracker",
  "My Calendar",
  "Documents",
  "Messages",
  "Notifications",
];

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <img src={Assets.logo} alt="Logo" style={headerStyles.logo} />

        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {navItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={headerStyles.navItems}>
            {navItems.map((item, index) => (
              <Typography key={index} variant="body2" sx={headerStyles.navItem(index === 0)}>
                {item}
              </Typography>
            ))}
          </Box>
        )}

        <Box sx={headerStyles.leftSection}>
          {!isMobile && (
            <Search>
              <SearchIcon sx={{ color: "primary.light" }} />
              <StyledInputBase placeholder="Search" />
            </Search>
          )}

          <Button variant="contained" sx={headerStyles.resumeButton}>
            Resume Builder
          </Button>
          <Avatar src={Assets.headerProfileImage} sx={headerStyles.avatar} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
