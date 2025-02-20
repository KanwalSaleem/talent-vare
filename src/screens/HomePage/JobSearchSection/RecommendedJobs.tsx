
import { Box } from "@mui/material";
import { JobsHeader } from "./JobsHeader";
import { JobDetails } from "./JobDetails";
import { jobList } from "../../../constants/homePageData";


export const RecommendedJobs = () => {
    return (
        <Box sx={{ mt: 5, }}>

            <JobsHeader title="Recommended Jobs" description="See Recommended Jobs" />
           
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap"
                }}
            >
                {jobList.map((job, index) => (
                    <JobDetails />
                ))}
            </Box>
        </Box>
    );
};


