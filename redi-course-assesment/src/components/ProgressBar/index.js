import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.css"

export function LinearWithValueLabel({ index }) {
  const [progress, setProgress] = useState({ index });

  useEffect(() => {
    // console.log(progress);
    // setProgress((prevProgress) =>
    //   prevProgress >= 100 ? 10 : prevProgress + 10
    // );
  }, [progress]);

  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <Box sx={{ width: "50%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
