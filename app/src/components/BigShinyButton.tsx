import { Box, Button } from "@mui/material";
import { BigShiny } from "../types/BigShiny";
import { bsbContainer } from "../styles/inline";

export const BigShinyButton = ({ button }: BigShiny) => {
  const onButtonClick = (button: string) => {
    console.log(button);
  };

  return (
    <Box sx={bsbContainer}>
      <Button onClick={() => onButtonClick(button)}>{button}</Button>
    </Box>
  );
};
