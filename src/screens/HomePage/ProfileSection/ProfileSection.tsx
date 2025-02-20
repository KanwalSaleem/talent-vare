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
import {
  profileCardStyles,
  profileAvatarContainer,
  profileAvatar,
  profileContent,
  statsCardStyles,
  calendarCardStyles,
  accordionSummaryStyles,
  accordionDetailsStyles,
  calendarTextStyles,
} from "../../../styles/ProfileSectionStyle";

const UserProfileDetails = () => {
  return (
    <Card sx={profileCardStyles}>
      <CardMedia
        component="img"
        height="100"
        image={Assets.userProfileCoverImage}
        alt="User Cover"
      />
      <Box sx={profileAvatarContainer}>
        <Avatar src={Assets.userProfileImage} sx={profileAvatar} />
      </Box>
      <CardContent sx={profileContent}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
          Albert Flores
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ px: 2, color: "text.primary" }}>
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
          Clinton, Maryland
        </Typography>
      </CardContent>
    </Card>
  );
};

const UserStatistics = () => {
  return (
    <Card sx={statsCardStyles}>
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
    <Card sx={calendarCardStyles}>
      <CardContent sx={{ p: 0 }}>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={accordionSummaryStyles}>
            <Typography sx={calendarTextStyles}>My calendar</Typography>
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyles}>
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
