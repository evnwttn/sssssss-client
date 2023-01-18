import { Box } from "@mui/material";
import { BigShinyButton } from "./BigShinyButton";

export const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        mt: "30vh",
      }}
    >
      <BigShinyButton />
      <BigShinyButton />
    </Box>
  );
};
