import * as React from "react";
import Chip from "@mui/material/Chip";

export default function UserBadgeItem({ user, handleFunction }) {
  return (
    <Chip
      style={{ marginTop: "5px" }}
      label={user.fullname}
      variant="Clickable"
      onClick={handleFunction}
      onDelete={handleFunction}
    />
  );
}
