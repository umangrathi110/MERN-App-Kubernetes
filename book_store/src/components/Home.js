import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="main_div"
        style={{
          background:
            "url(https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=600)",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontFamily: "monospace", zIndex: 99 }} variant="h3">
            This is HomePage
          </Typography>
          <Button
            sx={{
              marginTop: 15,
              background: "green",
              borderRadius: "1rem",
              zIndex: 99,
            }}
            variant="contained"
            LinkComponent={Link}
            to="/books"
          >
            <Typography variant="h4">View All Products</Typography>
          </Button>
        </Box>
      </div>
    </>
  );
}
