import { useAuthState } from "./context/auth.context";
import Home from "./screens/home";
import Error from "./screens/error";
import Result from "./screens/result";

function App() {
  const auth = useAuthState();
  return (
    <>
      {auth.weatherResult === "fails" && <Error />}
      {!auth.weatherResult && <Home />}
      {auth.weatherResult === "success" && <Result />}
    </>
  );
}

export default App;
