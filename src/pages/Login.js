import LoginForm from "../components/LoginForm";
import { Grid, Container, Box } from "@mui/material";
const Login = () => {
  return (
    <>
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
              <LoginForm />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={2} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Login;
