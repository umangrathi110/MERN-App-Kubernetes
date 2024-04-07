import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";
// NavLink is mainly focus on link when we click on link we can see in url /book or about this can happen by react-router-dom and to.
export default function Header() {
  const [value, setValue] = useState();
  return (
    <div className="navbar">
      {/* sx is a propes used for theme */}
      <AppBar sx={{ backgroundColor: "#3C486B" }} position="sticky">
        {/* (material ui)this helps to render text inside */}
        <Toolbar>
          {/* Navlink from react-router-dom */}
          <NavLink to={"/"} style={{ color: "white" }}>
            <Typography>
              {/* below this we can show the icon but we have to import link from material ui */}
              <LibraryBooksIcon />
            </Typography>
          </NavLink>

          <Tabs
            //  ml => margin
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* onChange event take event(e) and value(val) it contains the Number of Tab and event take current.target*/}

            {/*LinkComponent is propes it used when href propes provided.  */}
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="Abouts us" />
          </Tabs>
          {/* Tabs is the container which render the single-single Tab and (in the Tab we can add naviagtion like Home,About us).*/}
        </Toolbar>
        {/* Toolbar helps to create the structure of the application. basically it gives the looks of Navigation Bar.*/}
      </AppBar>
    </div>
  );
}
