import React from "react";
// import ECommerce from "../../Assets/images/ECommerce.png";
import GoldenGiants from "./Assets/images/GoldenGiants.png";
import RCWorldFoods from "./Assets/images/RCWorldFoods.png";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
// import Image from "react-bootstrap/Image";


export default function Portfolio() {
    return (
        <div className="container-fluid flex-row w-75 justify-content-center text-center">
            <div className="row p-2">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card card-bg">
                        <img className="card-img-top" alt="Golden Giants Language Translator" src={GoldenGiants} fluid="true">
                        </img>
                        <div className="card-body">
                            <h4 className="card-title text-center">Golden Giants Language Translator</h4>
                            <p className="card-text">An language translating application set up using JavaScript where a user can translate any words or setnences.</p>
                            <div className="d-flex justify-content-around">
                                <button
                                    variant="primary"
                                    href="https://github.com/Johnpo34/ECommerce_DB">
                                    GitHub Repo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card card-bg">
                        <img className="card-img-top" alt="RC World Foods" src={RCWorldFoods} fluid="true">
                        </img>
                        <div className="card-body">
                            <h4 className="card-title text-center">RC World Foods</h4>
                            <p className="card-text">An full stack application set up for and online food store.</p>
                            <div className="d-flex justify-content-around">
                                <button
                                    variant="primary"
                                    href="https://github.com/Johnpo34/ECommerce_DB">
                                    GitHub Repo
                                </button>
                                <button
                                variant="primary"
                                href="https://infinite-forest-73354.herokuapp.com/">Deployed page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card card-bg">
                        <img className="card-img-top" alt="Golden Giants Language Translator" src={GoldenGiants} fluid="true">
                        </img>
                        <div className="card-body">
                            <h4 className="card-title text-center">Golden Giants Language Translator</h4>
                            <p className="card-text">An language translating application set up using JavaScript where a user can translate any words or setnences.</p>
                            <div className="d-flex justify-content-around">
                                <button
                                    variant="primary"
                                    href="https://github.com/Johnpo34/ECommerce_DB">
                                    GitHub Repo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}