import { SxProps, Theme } from "@mui/material";

export const profileCardStyles: SxProps<Theme> = {
  maxWidth: 346,
  maxHeight: 248,
  borderRadius: "10px",
};

export const profileAvatarContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  mt: "-43px",
};

export const profileAvatar: SxProps<Theme> = {
  width: 86,
  height: 86,
  border: "2px solid white",
};

export const profileContent: SxProps<Theme> = {
  textAlign: "center",
  mt: "-15px",
};

export const statsCardStyles: SxProps<Theme> = {
  maxWidth: 346,
  maxHeight: 137,
  borderRadius: "10px",
  mt: 2,
};

export const calendarCardStyles: SxProps<Theme> = {
  maxWidth: 346,
  maxHeight: 80,
  borderRadius: "10px",
  mt: 2,
};

export const accordionSummaryStyles: SxProps<Theme> = {
  fontWeight: "bold",
};

export const accordionDetailsStyles: SxProps<Theme> = {
  p: 0,
  pb: 1,
  ml: 2,
};

export const calendarTextStyles: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: "16px",
  color: "text.primary",
};
