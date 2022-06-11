import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
import LoginIcon from "@material-ui/icons/PeopleAltRounded";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from './HederNav.css'
import React from "react";
import fiver from "../assets/fivver.png";
import profile from '../assets/profile.jpeg'

const HederNav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ background: "white" }}>
                    {/* <IconButton color="inherit" >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography  >
                        {/* <h3 style={{ color: "grey", textShadow: "300px", marginRight: "30px", fontWeight: "bold", fontSize: "16px" }}> Fiverr</h3> */}
                        <img src={fiver} style={{ height: "55px", width: "90px", background: "transparent" }}></img>
                    </Typography>

                    <Typography  >
                        <h3 className="navigation"> Message</h3>
                    </Typography>
                    <Typography  >
                        <h3 className="navigation" style={{ borderBottom: "3px solid #03C03C", fontStyle: "underline", color: "#03C03C" }}> Orders</h3>
                    </Typography>
                    <Typography  >
                        <h3 className="navigation"> Gigs</h3>
                    </Typography>

                    <Typography  >
                        <h3 style={{ color: "grey", marginLeft: "30px", fontWeight: "550", fontSize: "14px" }}> Analytics</h3>
                    </Typography>
                    <Typography  >
                        <h3 style={{ color: "grey", marginLeft: "30px", fontWeight: "550", fontSize: "14px" }}> Earnings</h3>
                    </Typography>

                    <Typography style={{ marginLeft: "auto" }}>

                        <Button color="inherit" variant="outlined" style={{ margin: 4 }}>
                            <img src={profile} className="main-profile-img" />

                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default HederNav