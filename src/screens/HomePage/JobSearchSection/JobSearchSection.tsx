import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SearchBar } from "./SearchBar";
import { JobTags } from "./JobTags";
import { FeaturedJobs } from "./FeaturedJobs";
import { RecommendedJobs } from "./RecommendedJobs";
import { jobSearchStyles } from "../../../styles/HomePageStyles";

export const JobSearchSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={jobSearchStyles.container(isMobile)}>
      <Typography variant={isMobile ? "h6" : "h5"} sx={jobSearchStyles.heading}>
        Find your Dream Job,{" "}
        <Typography component="span" sx={jobSearchStyles.highlightedText(isMobile)}>
          Albert!
        </Typography>
      </Typography>

      <Typography variant="body2" sx={jobSearchStyles.subHeading(isMobile)}>
        Explore the latest job openings and apply for the best opportunities available today!
      </Typography>

      <SearchBar />
      <JobTags />
      <FeaturedJobs />
      <RecommendedJobs />
    </Box>
  );
};

