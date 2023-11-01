import {
  Container,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Login from "./components/Login";
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
      <Box
        sx={{
          backgroundColor: "#f1f1f1",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xl={3} lg={3} md={3} sm={2} xs={12}></Grid>
            <Grid item xl={6} lg={6} md={6} sm={8} xs={12}>
              <Login />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={2} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
