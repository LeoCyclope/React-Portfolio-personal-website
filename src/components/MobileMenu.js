import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {info} from "../info/Info";
import {Box} from "@mui/material";
import Style from './Navbar.module.scss';


import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";



const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

const links = info.infoMenu;

function DrawerComponent() {
    //const classes = useStyles();
      const location = useLocation()
      const [openDrawer, setOpenDrawer] = useState(false);
      const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));


      return (
        <>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <List>

            {links.map((link, index) => (
                    <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                    </ListItemText>
                  </ListItem>
                ))}
            </List>
          </Drawer>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
          </IconButton>
        </>
      );
    }
    export default DrawerComponent;