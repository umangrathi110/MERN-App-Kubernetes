import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h3" sx={{ fontFamily: "fantasy" }}>
          This is CRUD Application
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: "fantasy" }}>
          By using MERN STACK
        </Typography>
      </Box>
    </>
  );
};
export default About;
