import React from "react";
import { Card, CardContent, Typography, Button, Box, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Assets } from "../../../assets/Assets";
import { jobDetailsStyles } from "../../../styles/HomePageStyles";

export const JobDetails = () => {
    return (
        <Card sx={jobDetailsStyles.card}>
            <Typography variant="body2" fontWeight="bold" color="text.primary">
                Promoted
            </Typography>

            <Box sx={jobDetailsStyles.companyInfo}>
                <img src={Assets.jobIcon} alt="Company Logo" width={23} height={21} />
                <Box>
                    <Typography variant="h6" sx={jobDetailsStyles.jobTitle}>
                        UI/UX Designer
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Teams
                    </Typography>
                </Box>
            </Box>

            <Box sx={jobDetailsStyles.iconText}>
                <LocationOnIcon fontSize="small" sx={jobDetailsStyles.icon} />
                <Typography variant="body2" color="text.secondary">
                    Seattle, USA (Remote)
                </Typography>
            </Box>

            <Box sx={jobDetailsStyles.iconText}>
                <AccessTimeIcon fontSize="small" sx={jobDetailsStyles.icon} />
                <Typography variant="body2" color="text.secondary">
                    1 day ago |{" "}
                    <Typography component="span" color="primary" variant="body2">
                        22 applicants
                    </Typography>
                </Typography>
            </Box>

            <Box sx={jobDetailsStyles.actionContainer}>
                <Button variant="contained" sx={jobDetailsStyles.applyButton}>
                    Apply Now
                </Button>
                <IconButton>
                    <BookmarkBorderIcon />
                </IconButton>
            </Box>
        </Card>
    );
};
