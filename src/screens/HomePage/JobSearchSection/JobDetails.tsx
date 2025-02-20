import React from "react";
import { Card, CardContent, Typography, Button, Box, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Assets } from "../../../assets/Assets";

export const JobDetails = () => {
    return (
        <Card sx={{ width: 250, borderRadius: 2, boxShadow: 3, padding: 2 }}>
            <Typography variant="body2" fontWeight="bold" color="text.primary">
                Promoted
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
                <img src={Assets.jobIcon} alt="Company Logo" width={23} height={21} />
                <Box>
                    <Typography variant="h6" fontSize={16} fontWeight="bold" color="text.primary">
                        UI/UX Designer
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Teams
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
                <LocationOnIcon fontSize="small" sx={{color: "text.secondary"}} />
                <Typography variant="body2" color="text.secondary">
                    Seattle, USA (Remote)
                </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
                <AccessTimeIcon fontSize="small" sx={{color: "text.secondary"}} />
                <Typography variant="body2" color="text.secondary">
                    1 day ago |{" "}
                    <Typography component="span" color="primary" variant="body2">
                        22 applicants
                    </Typography>
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Button variant="contained"  sx={{ textTransform: "none", paddingX: 4}} >
                    Apply Now
                </Button>
                <IconButton>
                    <BookmarkBorderIcon />
                </IconButton>
            </Box>
        </Card>
    );
};

