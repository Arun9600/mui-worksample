import { Button, Container, FormControl, TextField, Box } from "@mui/material";
const Login = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }} padding={6}>
        <FormControl fullWidth required>
          <TextField
            type="email"
            label="Email"
            name="email"
            sx={{ marginBottom: "15px" }}
          ></TextField>
        </FormControl>
        <FormControl fullWidth required>
          <TextField
            type="password"
            label="Password"
            name="password"
            sx={{ marginBottom: "15px" }}
          ></TextField>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="outlined" size="large" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
