import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": { backgroundColor: alpha(theme.palette.common.black, 0.1) },
  marginLeft: theme.spacing(2),
  width: "261px",
  height: "39px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  paddingRight: "5px"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  paddingLeft: theme.spacing(1),
  color: theme.palette.primary.light
}));

export const headerStyles = {
  appBar: {
    backgroundColor: "background.paper",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: 41,
    height: 38
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  navItem: (isActive: boolean) => ({
    color: isActive ? "primary.main" : "primary.light",
    fontWeight: isActive ? "bold" : "normal",
    cursor: "pointer",
    "&:hover": { color: "primary.main" },
    fontSize: "16px",
  }),
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  resumeButton: {
    borderRadius: "8px",
    textTransform: "none",
  },
  avatar: {
    width: "38px",
    height: "38px",
  },
};
