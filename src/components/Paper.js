import { Paper, Grid, Typography, Box } from "@mui/material";
const Papper = () => {
  return (
    <>
      <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
        <Paper elevation={12}>
          <Box
            p={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle2">MUI Test</Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Papper;
