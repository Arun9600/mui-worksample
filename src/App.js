import Papper from "./components/Paper";
import {
  Container,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
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
      <Box my={4}>
        <Container>
          <Grid container spacing={2}>
            <Papper />
            <Papper />
            <Papper />
            <Papper />
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
