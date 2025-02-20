import { Box, Typography,} from "@mui/material"
import { SearchBar } from "./SearchBar";
import { jobList } from "../../../constants/homePageData";
import { JobTags } from "./JobTags";
import { FeaturedJobs } from "./FeaturedJobs";
import { RecommendedJobs } from "./RecommendedJobs";



export const JobSearchSection = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ color: "text.primary" }}>
        Find your Dream Job, <Typography component="span" color="primary" variant="h5" fontWeight="bold">Albert!</Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Explore the latest job openings and apply for the best opportunities available today!
      </Typography>

      <SearchBar />
      <JobTags />

      <FeaturedJobs />
      <RecommendedJobs/>

    </Box>
  )
}
