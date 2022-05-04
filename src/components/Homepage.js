import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";
import Resume from "./pages/Resume";

export default function Homepage () {
    const [currentPage, setCurrentPage] = useState("Aboutme");

    const renderPage = () => {
        if (currentPage === "Aboutme") {
            return <Aboutme/>;
        }
        if (currentPage === "Contact") {
            return <Contact/>;
        }
        if (currentPage === "Resume") {
            return <Resume/>;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio/>;
        }
    };

    const pageChange = (page) => setCurrentPage(page);
    return (
        <div>
            
        </div>
    )
}