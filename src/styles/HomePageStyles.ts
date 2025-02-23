import { alpha } from "@mui/material";


export const homePageStyles = {
  container: (isMobile: boolean) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 2 : 3,
    p: isMobile ? 2 : 3,
    backgroundColor: "background.default",
  }),
};


export const profileStyles = {
  profileCard: {
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-40px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    border: "4px solid white",
  },
  profileContent: {
    textAlign: "center",
    paddingTop: "8px",
  },
  profileName: {
    fontWeight: "bold",
    color: "text.primary",
  },
  profileDescription: {
    px: 2,
    color: "text.primary",
  },
  profileLocation: {
    color: "text.secondary",
    marginTop: "4px",
  },
  statsCard: {
    marginTop: "16px",
    padding: "16px",
  },
  calendarCard: {
    marginTop: "16px",
  },
  accordionSummary: {
    backgroundColor: alpha("#000", 0.05),
    borderRadius: "4px",
  },
  accordionDetails: {
    padding: "16px",
  },
  calendarText: {
    fontWeight: "bold",
    color: "primary.main",
  },
};



export const jobSearchStyles = {
  container: (isMobile: boolean) => ({
    flex: 1,
  }),
  heading: {
    fontWeight: "bold",
    color: "text.primary",
  },
  highlightedText: (isMobile: boolean) => ({
    color: "primary.main",
    variant: isMobile ? "h6" : "h5",
    fontWeight: "bold",
  }),
  subHeading: (isMobile: boolean) => ({
    color: "text.secondary",
    mb: isMobile ? 1 : 2,
  }),
};



export const searchBarStyles = {
  container: (isMobile: boolean) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    mt: 2,
    backgroundColor: "background.paper",
    alignItems: "center",
    gap: isMobile ? 2 : 1,
    padding: isMobile ? 2 : "5px",
    width: "100%",
  }),
  textField: {
    "& .MuiOutlinedInput-root": {
      height: 37,
      fontSize: "14px",
      color: "text.secondary",
      backgroundColor: "background.paper",
      "& fieldset": {
        borderColor: "background.paper",
        borderRightWidth: "1px",
        borderRightColor: "secondary.light",
      },
      "&:hover fieldset": {
        borderColor: "background.paper",
        borderRightWidth: "1px",
        borderRightColor: "secondary.light",
      },
      "&.Mui-focused fieldset": {
        borderColor: "background.paper",
        borderRightWidth: "1px",
        borderRightColor: "secondary.light",
      },
    },
  },
  select: (isMobile: boolean) => ({
    width: isMobile ? "100%" : 149,
    height: 37,
    fontSize: "14px",
    color: "text.secondary",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "background.paper",
      borderRightWidth: "1px",
      borderRightColor: "secondary.light",
    },
  }),
  searchButton: (isMobile: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    textTransform: "none",
    width: isMobile ? "100%" : 180,
    height: 40,
  }),
};



export const jobTagsStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 2,
    flexWrap: "wrap",
  },
  typography: {
    color: "primary.light",
  },
  button: {
    textTransform: "none",
    borderColor: "primary.light",
    color: "primary.light",
    borderRadius: "8px",
    px: 2,
    py: 0.5,
    fontSize: "14px",
  },
};


export const jobDetailsStyles = {
  card: {
    width: 250,
    borderRadius: 2,
    boxShadow: 3,
    padding: 2,
  },
  companyInfo: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "text.primary",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1,
  },
  icon: {
    color: "text.secondary",
  },
  actionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
  },
  applyButton: {
    textTransform: "none",
    px: 4,
  },
};

