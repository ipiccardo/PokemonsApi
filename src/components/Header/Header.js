import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { user } = useContext(AuthContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box style={{ zIndex: "1000 !important" }} sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PokeAPP
            </Typography>
            <NavLink to={"/"} style={{ color: "white", fontWeight: "bold" }}>
              <span className="nav-item nav-link text-info">{user?.name}</span>

              {/* <Button color="inherit">Login</Button> */}

              {/* <Button onClick={handleLogout} color="inherit">
                Logout
              </Button> */}
            </NavLink>
          </Toolbar>
        </AppBar>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Header;
