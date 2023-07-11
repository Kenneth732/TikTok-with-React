import React from "react";
import './Home.css'

function Home() {
    return (
        <div>
            <div class="navbar">
                <div class="nav-item">
                    <i class="fab fa-tiktok logo">  Ken't Tok</i>
                </div>
                <div class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-search"></i>
                    <span>Discover</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-plus"></i>
                    <span>Create</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-inbox"></i>
                    <span>Inbox</span>
                </div>
                <div class="nav-item">
                    <i class="fas fa-user"></i>
                    <span>Me</span>
                </div>
            </div>
        </div>
    )
}

export default Home

