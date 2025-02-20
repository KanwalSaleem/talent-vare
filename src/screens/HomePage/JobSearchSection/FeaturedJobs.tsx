import { Box } from "@mui/material";
import { JobsHeader } from "./JobsHeader";
import { JobDetails } from "./JobDetails";
import { jobList } from "../../../constants/homePageData";


export const FeaturedJobs = () => {
    return (
        <Box sx={{ mt: 3, }}>

            <JobsHeader title="Featured Jobs" description="See Featured Jobs" />
           
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


