import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CloudCircleOutlined from "@mui/icons-material/CloudOutlined";
import { useAuthDispatch, useAuthState } from "../context/auth.context";

function App() {
  const authDispatch = useAuthDispatch();
  const auth = useAuthState();
  return (
    <div className="app2">
      <Button
        variant="contained"
        color="warning"
        sx={{ height: "40px", width: "120px", marginTop: 2 }}
        onClick={() => {
          authDispatch({ type: "SET_WEATHER_RESULT", payload: "" });
        }}
      >
        Home
      </Button>
      <div style={{ height: 100 }} />
      <Stack
        alignItems={"center"}
        spacing={2}
        sx={{
          width: 400,
          height: 400,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CloudCircleOutlined
            color="disabled"
            sx={{
              height: "75px",
              width: "75px",
            }}
          />
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 20,
              color: "#999",
            }}
          >
            {auth.weatherDetails.main.temp + "°"}
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 15,
              color: "#bdbdbd",
            }}
          >
            {auth.weatherDetails.weather[0].main}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 15,
              color: "#bdbdbd",
            }}
          >
            {"Humidity: " + auth.weatherDetails.main.humidity + "%"}
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 15,
              color: "#bdbdbd",
            }}
          >
            {"Wind Speed: " + auth.weatherDetails.wind.speed + "mph"}
          </Typography>
        </div>
      </Stack>
      <div style={{ height: 40 }} />
      <Typography
        sx={{
          fontStyle: "normal",
          fontSize: 15,
          color: "#bdbdbd",
        }}
      >
        {`Location | ${auth.weatherDetails.name}`}
      </Typography>
    </div>
  );
}

export default App;
