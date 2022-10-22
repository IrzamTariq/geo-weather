import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import { useAuthDispatch } from "../context/auth.context";

function App() {
  const authDispatch = useAuthDispatch();
  return (
    <div className="app">
      <Stack
        alignItems={"center"}
        spacing={2}
        sx={{
          width: 500,
          height: 300,
          backgroundColor: "white",
        }}
      >
        <FmdBadOutlinedIcon
          color="error"
          sx={{
            height: "100px",
            width: "100px",
          }}
        />
        <Typography
          sx={{
            fontStyle: "normal",
            fontSize: 15,
            color: "#bdbdbd",
          }}
        >
          {"Whoa! Looks like there was an error"}
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontSize: 15,
            color: "#bdbdbd",
          }}
        >
          {"With your zipcode."}
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ height: "40px", width: "120px" }}
          onClick={() => {
            authDispatch({ type: "SET_WEATHER_RESULT", payload: "" });
          }}
        >
          Try Again
        </Button>
      </Stack>
    </div>
  );
}

export default App;
