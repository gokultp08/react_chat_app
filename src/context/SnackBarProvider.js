import { Snackbar } from "@mui/material";
import React, { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const SnackBarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = (newMessage) => {
    setMessage(newMessage);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ message, sendMessage }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={closeSnackbar}
      />
    </SnackbarContext.Provider>
  );
};
