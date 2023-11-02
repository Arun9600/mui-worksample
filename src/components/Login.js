import { Button, Container, FormControl, TextField, Box } from "@mui/material";
import { useForm } from "react-hook-form";
const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }} padding={6}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth required>
            <TextField
              type="email"
              label="Email"
              name="email"
              sx={{ marginBottom: "25px" }}
              inputProps={{
                style: {
                  height: "20px",
                },
              }}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value:
                    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                  message: "Enter the valid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            ></TextField>
          </FormControl>
          <FormControl fullWidth required>
            <TextField
              type="password"
              label="Password"
              name="password"
              sx={{ marginBottom: "25px" }}
              inputProps={{
                style: {
                  height: "20px",
                },
              }}
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            ></TextField>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" size="large" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Login;
