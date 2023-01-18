import axios from "axios";
import { Box, Button } from "@mui/material";
import { BSBButton } from "../types/BSBButton";
import { bsbSx } from "../styles/inline";

export const BigShinyButton = ({ button }: BSBButton) => {
  const onButtonClick = (button: string) => {
    axios
      .put("http://localhost:8000/", button)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Box sx={bsbSx.container}>
      <Button
        sx={bsbSx.button}
        onClick={() => onButtonClick(button)}
      >{`${button}`}</Button>
    </Box>
  );
};
