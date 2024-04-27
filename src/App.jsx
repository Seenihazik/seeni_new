import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment
} from "@mui/material";
import "./styles.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton"; // Correct import

export default function App() {
  return (
    <div className="App">
      <Grid
        style={{
          display: "flex",
          color: "blue",
          fontWeight: "500px",
          fontSize: "200"
        }}
      >
        <Typography>
          <span
            style={{
              border: "2px solid blue",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "bold"
            }}
          >
            {" "}
          </span>
        </Typography>
      </Grid>
      <Grid
        sx={{
          color: "black",
          fontSize: "30px",
          textAlign: "center",
          paddingTop: "25px",
          wordSpacing: "5px"
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          Make the most of your personal life
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "20px "
        }}
      >
        <Paper style={{ width: "75%" }}>
          <Grid sx={{ padding: "10px" }}>
            <Typography
              sx={{
                display: "flex",
                fontWeight: 600,
                color: "#000000BF",
                fontSize: "14px"
              }}
            >
              Email or phone
            </Typography>
            <TextField
              sx={{ display: "flex", width: "420px" }}
              size="small"
              id="outlined-basic"
              name="Email or phone"
              variant="outlined"
            />
          </Grid>
          <Grid sx={{ padding: "10px" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000BF",
                fontWeight: 600,
                fontSize: "14px"
              }}
            >
              Password (6+ characters)
            </Typography>
            <TextField
              sx={{ display: "flex", width: "420px" }}
              size="small"
              id="outlined-basic"
              name="Email or phone"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <Button>SHOW</Button>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid display="flex" flexWrap="wrap">
            <Grid> By clicking Agree & Join, you agree to the LinkedIn</Grid>
            <Grid sx={{ padding: "4px" }}>
              <a href="http://stackoverflow.com/questions/6046110/styling-form-with-label-above-inputs">
                User Agreement Privacy Policy
              </a>
            </Grid>
            <Typography> and </Typography>
            <Typography>hkjkgu</Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
