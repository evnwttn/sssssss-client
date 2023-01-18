import { Box } from "@mui/material";
import { BigShinyButton } from "./BigShinyButton";
import { appContainer } from "../styles/inline";

export const App = () => {
  return (
    <Box sx={appContainer}>
      <BigShinyButton />
      <BigShinyButton />
    </Box>
  );
};
