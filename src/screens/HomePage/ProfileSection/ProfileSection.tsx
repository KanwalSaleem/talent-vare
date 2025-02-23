import { Fragment } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Assets } from "../../../assets/Assets";
import { stats } from "../../../constants/homePageData";
import { profileStyles } from "../../../styles/HomePageStyles";

const UserProfileDetails = () => {
  return (
    <Card sx={profileStyles.profileCard}>
      <CardMedia
        component="img"
        height="100"
        image={Assets.userProfileCoverImage}
        alt="User Cover"
      />
      <Box sx={profileStyles.avatarContainer}>
        <Avatar src={Assets.userProfileImage} sx={profileStyles.avatar} />
      </Box>
      <CardContent sx={profileStyles.profileContent}>
        <Typography variant="h6" sx={profileStyles.profileName}>
          Albert Flores
        </Typography>
        <Typography variant="body2" sx={profileStyles.profileDescription}>
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </Typography>
        <Typography variant="body2" sx={profileStyles.profileLocation}>
          Clinton, Maryland
        </Typography>
      </CardContent>
    </Card>
  );
};

const UserStatistics = () => {
  return (
    <Card sx={profileStyles.statsCard}>
      <CardContent>
        <Stack spacing={1.5}>
          {stats.map((stat) => (
            <Fragment key={stat.label}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.primary">
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="primary" fontWeight="bold">
                  {stat.value}
                </Typography>
              </Stack>
              <Divider />
            </Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

const UserCalendar = () => {
  return (
    <Card sx={profileStyles.calendarCard}>
      <CardContent sx={{ p: 0 }}>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={profileStyles.accordionSummary}>
            <Typography sx={profileStyles.calendarText}>My calendar</Typography>
          </AccordionSummary>
          <AccordionDetails sx={profileStyles.accordionDetails}>
            <Typography variant="body2" sx={{ color: "primary.light" }}>
              Upcoming Interviews
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export const ProfileSection = () => {
  return (
    <Box>
      <UserProfileDetails />
      <UserStatistics />
      <UserCalendar />
    </Box>
  );
};
