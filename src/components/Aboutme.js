import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../images/IMG_5394.jpg'

function Aboutme() {
    return (
        <div>
            <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>About Me</h1>
                            <h2>John Pohl</h2>
                        </div>
                    </div>
                    <p>Hi there, my name is John Pohl and I am full stack web developer from Pittsburgh, PA.</p>
                </div>
                <div class="col-lg-6">
                    <img src={ProfilePic} alt="Profile Picture"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Aboutme