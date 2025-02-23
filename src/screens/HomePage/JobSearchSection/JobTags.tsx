import { Box, Button, Typography } from "@mui/material";
import { jobTags } from "../../../constants/homePageData";
import { jobTagsStyles } from "../../../styles/HomePageStyles";

export const JobTags = () => {
  return (
    <Box sx={jobTagsStyles.container}>
      <Typography variant="body1" sx={jobTagsStyles.typography}>
        Similar:
      </Typography>
      {jobTags.map((job, index) => (
        <Button key={index} variant="outlined" sx={jobTagsStyles.button}>
          {job}
        </Button>
      ))}
    </Box>
  );
};
