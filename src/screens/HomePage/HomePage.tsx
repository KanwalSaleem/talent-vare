import { ProfileSection } from "./ProfileSection/ProfileSection";
import { JobSearchSection } from "./JobSearchSection/JobSearchSection";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { homePageStyles } from "../../styles/../styles/HomePageStyles";

export const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={homePageStyles.container(isMobile)}>
            <ProfileSection />
            <JobSearchSection />
        </Box>
    );
};
