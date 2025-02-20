import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
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
  return (
    <AppBar position="static" color="default" elevation={0} sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <img src={Assets.logo} alt="Logo" style={headerStyles.logo} />

        <Box sx={headerStyles.navItems}>
          {navItems.map((item, index) => (
            <Typography key={index} variant="body2" sx={headerStyles.navItem(index === 0)}>
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={headerStyles.leftSection}>
          <Search>
            <SearchIcon sx={{ color: "primary.light" }} />
            <StyledInputBase placeholder="Search" />
          </Search>

          <Button variant="contained" sx={headerStyles.resumeButton}>
            Resume Builder
          </Button>
          <Avatar src={Assets.headerProfileImage} sx={headerStyles.avatar} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
