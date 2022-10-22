import Button from "@mui/material/Button";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { api } from "../utils/api";
import { useAuthDispatch } from "../context/auth.context";

function App() {
  const authDispatch = useAuthDispatch();
  const [option, setOption] = useState("city");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const handleSearchLocation = () => {
    let query = "?APPID=0fbdea0e9d22020e31033cb94e80b5f4&units=metric";
    if (option === "city") {
      query += `&q=${value}`;
    }
    if (option === "zipcode") {
      query += `&zip=${value}`;
    }
    if (option === "cityId") {
      query += `&id=${value}`;
    }
    if (option === "coord") {
      query += `&lat=${value}&lon=${value2}`;
    }
    api
      .getWeatherDetails({ query })
      .then((response) => {
        console.log("RESPONSE......R", response);
        authDispatch({ type: "SET_WEATHER_DETAILS", payload: response });
        authDispatch({ type: "SET_WEATHER_RESULT", payload: "success" });
      })
      .catch((err) => {
        authDispatch({ type: "SET_WEATHER_RESULT", payload: "fails" });
      });
  };
  const handleLabel = () => {
    if (option === "city") {
      return "Enter City Name..";
    }
    if (option === "zipcode") {
      return "Enter ZipCode..";
    }
    if (option === "cityId") {
      return "Enter City ID..";
    }
    if (option === "coord") {
      return "Enter Longitude..";
    }
  };
  return (
    <div className="app">
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: 600,
            height: 300,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "helvetica",
              color: "#e3f2fd",
              fontWeight: 750,
              fontSize: 40,
            }}
          >
            Weather Forcast
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 15,
              color: "#bdbdbd",
              marginTop: 2,
            }}
          >
            {"Enter a Norwegian zipcode below to get the"}
          </Typography>
          <Typography
            sx={{ fontStyle: "normal", fontSize: 15, color: "#bdbdbd" }}
          >
            {"    current weather conditions for that area."}
          </Typography>
        </Box>
        <Stack spacing={1} direction="row" alignItems="center">
          <div style={{ display: "flex", padding: 2 }}>
            <TextField
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
              sx={{
                width: option === "coord" ? "175px" : "350px",
                backgroundColor: "white",
                marginRight: 2,
              }}
              label={handleLabel()}
              id="filled-basic"
              variant="filled"
            />
            {option === "coord" && (
              <TextField
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
                value={value2}
                sx={{ width: "175px", backgroundColor: "white", marginLeft: 2 }}
                label="Enter Latitude.."
                id="filled-basic"
                variant="filled"
              />
            )}
          </div>
          <Button
            onClick={() => {
              handleSearchLocation();
            }}
            variant="contained"
            color="warning"
            sx={{ height: "53px", width: "100px" }}
          >
            Enter
          </Button>
        </Stack>
        <FormControl>
          <RadioGroup
            onChange={(e) => {
              setOption(e.target.value);
            }}
            defaultValue="city"
          >
            <FormControlLabel
              onSelect={() => {
                setOption("city");
              }}
              value="city"
              control={<Radio sx={{ color: "white" }} />}
              label="City name"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              onSelect={() => {
                setOption("cityId");
              }}
              value="cityId"
              control={<Radio sx={{ color: "white" }} />}
              label="City id"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              onSelect={() => {
                setOption("coord");
              }}
              value="coord"
              control={<Radio sx={{ color: "white" }} />}
              label="City co-ordinates"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              onSelect={() => {
                setOption("zipcode");
              }}
              value="zipcode"
              control={<Radio sx={{ color: "white" }} />}
              label="City zipcode"
              sx={{ color: "white" }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
