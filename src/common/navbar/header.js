import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Logo from "../../pages/image/download.png";
import { Typography, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../navbar/header.css";



export default class header extends Component {
    render() {
        return (
            <Grid>
                <Grid className='marginside' style={{ display: "flex", justifyContent: "space-between", }}>

                    {/* search bar section */}

                    <Grid className='searchbar-section' style={{ display: "flex", gap: "10px", paddingTop: "10px", paddingBottom: "10px", marginLeft: "9%" }}>
                        <img src={Logo} style={{ height: "34px", width: '34px' }} />
                        <Grid>
                            <Paper
                            className='search-bar-desktop'
                                component="form"
                                style={{ width: "260px", height: "35px", backgroundColor: "rgba(121, 0, 255, 0.08)", boxShadow: "none" }}
                            >
                                <IconButton
                                    type="button"
                                    style={{ p: "150px" }}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    // style={{ ml: 5, flex: 1, fontSize: "15px" }}
                                    placeholder="Search "
                                    inputProps={{ "aria-label": "Search " }}
                                />
                            </Paper>

                            <Box className="small-screen-search" style={{ textAlign: "center", }}>
                                <SearchIcon />
                                <Typography className=" navbar-text" style={{ fontSize: "11px" }}>Search</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* middle navbar section */}

                    <Grid style={{ display: "flex", gap: "12px", marginRight: "10%" }}>
                        <Grid style={{ display: "flex", gap: "24px" }}>
                            <Box className="navbar-item active" style={{ textAlign: "center", }}>
                                <HomeIcon />
                                <Typography className=" navbar-text" style={{ fontSize: "11px" }}>Home</Typography>
                            </Box>
                            <Box className="navbar-item" style={{ textAlign: "center", }}>
                                <PeopleIcon />
                                <Typography className=" navbar-text" style={{ fontSize: "11px" }}>My Networks</Typography>
                            </Box>

                            <Box className="navbar-item" style={{ textAlign: "center", }}><WorkIcon /><Typography  className=" navbar-text" style={{ fontSize: "11px" }}>Jobs</Typography> </Box>
                            <Box className="navbar-item" style={{ textAlign: "center", }}><TextsmsIcon /><Typography  className=" navbar-text" style={{ fontSize: "11px" }}>Massaging</Typography> </Box>
                            <Box className="navbar-item" style={{ textAlign: "center", }}><NotificationsIcon /><Typography  className=" navbar-text" style={{ fontSize: "11px" }}>Notification</Typography> </Box>
                        </Grid>
                        <Grid className=" profile-item" style={{ textAlign: "center", borderRight: "1px solid lightgray" }}>
                            <AccountCircleIcon />
                            <Typography className=" navbar-text" style={{ fontSize: "11px", display: "flex", alignItems: "center" }}>Me<ArrowDropDownIcon /></Typography>
                        </Grid>
                        <Grid className="navbar-item" style={{ display: 'flex', alignItems: "center" }}>
                            <Grid style={{ textAlign: "center" }}>
                                <AppsIcon />
                                <Typography className=" navbar-text" style={{ fontSize: "11px", display: "flex", alignItems: "center" }}>For Business<ArrowDropDownIcon /></Typography>
                            </Grid>
                            <Link style={{ color: "gray" }}> <Typography style={{ fontSize: "11px",whiteSpace:"nowrap" }}>Get Hired  faster,<br />
                                Try premium free</Typography>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}
