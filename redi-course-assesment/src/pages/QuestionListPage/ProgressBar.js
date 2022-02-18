import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "./index.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 3,
    backgroundColor: theme.palette.mode === "light" ? "#f15a22" : "#E7D4CC",
  },
}));
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
        <BorderLinearProgress variant="determinate" {...props} />
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

export function ProgressBar({ currentIndex }) {
  const [progress, setProgress] = useState(currentIndex);

  useEffect(() => {
    setProgress((prevProgress) => {
      if (prevProgress <= 100) {
        return prevProgress <= progress ? prevProgress + 20 : prevProgress - 20;
      }
    });
  }, [currentIndex]);

  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
