import { Grid } from "@mui/material";

import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import { TwitDetails } from "../TwtDetails/TwitDetails";


const HomePage = () => {
    return (
        <Grid container xs={12} className="px-5 lg:px-36 justify-between">
            <Grid item xs={12} lg={2.5} className="lg:block w-full relative">
                <Navigation />
            </Grid>
            <Grid item xs={12} lg={6} className="px-5 lg:px-9 lg:block w-full relative">
                
                <Routes>
                    <Route path="/" element={<HomeSection/>}></Route>
                    <Route path="/home" element={<HomeSection/>}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                    <Route path="/twit/:id" element={<TwitDetails/>}></Route>
                </Routes>
            </Grid>
            <Grid item xs={12} lg={3} className="lg:block w-full relative">
                <RightPart />
            </Grid>
        </Grid>
    )
}

export default HomePage