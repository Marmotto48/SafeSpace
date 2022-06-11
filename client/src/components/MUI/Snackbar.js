import React, { forwardRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CircularIndeterminate, Loading } from "./Spinner";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnackBar = ({ openSnack, setOpenSnack, text, error }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      {error ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Something went wrong, please try after a minute.
            </Alert>
          </Snackbar>
        </Stack>
      ) : (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {text}
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
};
export default SuccessSnackBar;
