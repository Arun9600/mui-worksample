import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/Login";
const App = () => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "subtitle2",
            },
            style: {
              fontWeight: "bold",
              fontSize: "18px",
            },
          },
        ],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
