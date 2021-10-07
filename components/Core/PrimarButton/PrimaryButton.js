import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

export const PrimaryButton = styled(Button)(() => ({
  backgroundColor: amber[600],
  fontFamily: "Gemunu Libre",
  "&:hover": {
    backgroundColor: amber[700],
  },
  fontSize: "18px",
  fontWeight: "700",
}));
