import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const CARD_STYLING: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  padding: "2vmin",
  backgroundColor: "#D6ECFF",
  justifyContent: "center",
  boxSizing: "border-box",
  margin: "auto",
  display: "table-cell",
  verticalAlign: "middle",
};

export interface ICenterCardView {
  maxWidth: string;
  children: React.ReactNode;
}

function CenterCardView(props: ICenterCardView): JSX.Element {
  return (
    <Box sx={CARD_STYLING}>
      <Card raised sx={{ maxWidth: props.maxWidth, margin: "auto" }}>
        {props.children}
      </Card>
    </Box>
  );
}

export default CenterCardView;
