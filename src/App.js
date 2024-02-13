import "./App.css";
import { Button, Card, CardActions, Typography } from "@mui/material";
import { useDispatch ,useSelector} from "react-redux";
import { incrementNumber,decrementNumber,resetNumber } from "./store/slices/counterSlice";

function App() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  



  const incrementHandler = () => {
    dispatch(incrementNumber());
  };
  const decrementHandler = () => {
   dispatch(decrementNumber());
  };
  const resetHandler = () => {
    dispatch(resetNumber());
  };
  return (
    <div className="app-container">
      <Card sx={{ minWidth: 275, minHeight: 200, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)!important'}}>
        <div>
          <Typography variant="h4" fontWeight="fontWeightBold" padding={3}>
            Counter App
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            fontWeight="fontWeightBold"
            style={{ margin: "12px 0", fontSize: "25px" }}
          >
            {number}
          </Typography>
        </div>
        <CardActions sx={{ justifyContent: "center", gap: "15px" }}>
          <Button
            onClick={(e) => {
              incrementHandler();
            }}
            variant="contained"
            color="success"
          >
            Increment
          </Button>

          <Button
            disabled={number === 0}
            variant="contained"
            color="warning"
            onClick={(e) => {
              decrementHandler();
            }}
            sx={{
              "&.Mui-disabled": {
                backgroundColor: "rgba(255, 165, 0, 0.6)", // Adjust the color and opacity as needed
                color: "#fff", // Adjust text color if needed
              },
            }}
          >
            Decrement
          </Button>
          <Button
            disabled={number === 0}
            variant="contained"
            color="error"
            onClick={(e) => {
              resetHandler();
            }}
            sx={{
              "&.Mui-disabled": {
                backgroundColor: "rgba(255, 0, 0, 0.6)", // Adjust the color and opacity as needed
                color: "#fff", // Adjust text color if needed
              },
            }}
          >
            Reset
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
