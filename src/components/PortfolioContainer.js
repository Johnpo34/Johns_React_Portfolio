import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import Resume from "./Resume";

export default function PortfolioContainer () {
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

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* <Footer></Footer> */}
        </div>
    );
}