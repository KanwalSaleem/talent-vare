import { ProfileSection } from "./ProfileSection/ProfileSection";
import { JobSearchSection } from "./JobSearchSection/JobSearchSection";
import { Box } from "@mui/material";


export const HomePage = () => {
    return (
        <Box sx={{ display: "flex", gap: 3, p: 3, backgroundColor: "background.default" }}>
            <ProfileSection />
            <JobSearchSection />
        </Box>
    );
};

