import { Box, Button, Typography } from "@mui/material"
import { jobTags } from "../../../constants/homePageData"

export const JobTags = () =>{
    return(
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
        <Typography variant="body1" sx={{ color: "primary.light" }}>
            Similar:
        </Typography>
        {jobTags.map((job, index) => (
            <Button
                key={index}
                variant="outlined"
                sx={{
                    textTransform: "none",
                    borderColor: "primary.light",
                    color: "primary.light",
                    borderRadius: "12px",
                    px: 2, 
                    py: 0.5, 
                    fontSize: "14px",
                   
                }}
            >
                {job}
            </Button>
        ))}
    </Box>
    )
}