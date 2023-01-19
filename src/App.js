import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
// I need AppLayout to Structure my Components 
 /**
     * Designing High Level Components
     * 
     * Header
     *  .Logo
     *  .NavItems(on RightSide)
     * 
     * Body
     *  .SearchBar
     *  .RestrauntList
     *    .ResturantCard
     *      .Image
     *      .Name
     *      .Rating 
     *      .Cusines
     * 
     * Footer
     *  .Copyright 
     *  .Link to social media
     */
 const AppLayout = ()=>{
    return(
        <div className="AppLayout">
           <Header />
           <Body />
           <Footer />
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AppLayout />
    </React.StrictMode>
    );