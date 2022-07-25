import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import createMuiTheme from "../theme";

function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    (): Theme => createMuiTheme({ mode: prefersDarkMode ? "dark" : "light" }),
    [prefersDarkMode]
  );

  return theme;
}

export default useTheme;
