import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
    return (
        <Box sx={{
            display: "flex",
            mt: 2,
            backgroundColor: "background.paper",
            height: "77px",
            alignItems: "center",
            gap: 1,
            padding: "5px",
        }}>

            <Box sx={{ width: 487 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Job Title, Company, or Keywords"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 37,
                            fontSize: "14px",
                            color: "text.secondary",
                            backgroundColor: "background.paper",
                            "& fieldset": {
                                borderColor: "background.paper",
                                borderRightWidth: "1px",
                                borderRightColor: "secondary.light",
                            },
                            "&:hover fieldset": {
                                borderColor: "background.paper",
                                borderRightWidth: "1px",
                                borderRightColor: "secondary.light",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "background.paper",
                                borderRightWidth: "1px",
                                borderRightColor: "secondary.light",
                            },
                        },
                    }}
                />
            </Box>


            <Select
                defaultValue="Select Location"
                sx={{
                    width: 149,
                    height: 37,
                    fontSize: "14px",
                    color: "text.secondary",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "background.paper",
                        borderRightWidth: "1px",
                        borderRightColor: "secondary.light",
                    },
                }}
            >
                <MenuItem value="Select Location">Select Location</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="On-Site">On-Site</MenuItem>
            </Select>


            <Select
                defaultValue="Select Location"
                sx={{
                    width: 149,
                    height: 37,
                    fontSize: "14px",
                    color: "text.secondary",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "background.paper",
                        borderRightWidth: "1px",
                        borderRightColor: "secondary.light",
                    },
                }}
            >
                <MenuItem value="Select Location">Select Location</MenuItem>
                <MenuItem value="Remote">Full time</MenuItem>
                <MenuItem value="On-Site">Part time</MenuItem>
            </Select>

            <Button
                variant="contained"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textTransform: "none",
                }}
            >
                <SearchIcon fontSize="small" />
                Search
            </Button>
        </Box>
    );
};
