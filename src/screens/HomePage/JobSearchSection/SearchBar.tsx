import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { searchBarStyles } from "../../../styles/HomePageStyles";

export const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={searchBarStyles.container(isMobile)}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Job Title, Company, or Keywords"
        sx={searchBarStyles.textField}
      />

      <Select defaultValue="Select Location" fullWidth={isMobile} sx={searchBarStyles.select(isMobile)}>
        <MenuItem value="Select Location">Select Location</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="On-Site">On-Site</MenuItem>
      </Select>

      <Select defaultValue="Select Job Type" fullWidth={isMobile} sx={searchBarStyles.select(isMobile)}>
        <MenuItem value="Select Job Type">Select Job Type</MenuItem>
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
      </Select>

      <Button variant="contained" sx={searchBarStyles.searchButton(isMobile)}>
        <SearchIcon fontSize="small" />
        Search
      </Button>
    </Box>
  );
};
