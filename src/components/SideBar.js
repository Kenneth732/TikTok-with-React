import React from "react";
import './Sidebar.css'

function Sidebar() {
    return (
        <div>
            <div class="sidebar">
                <div class="sidebar-item">
                    <i class="fas fa-hashtag"></i>
                    <span>Following</span>
                </div>
                <div class="sidebar-item">
                    <i class="fas fa-music"></i>
                    <span>Music</span>
                </div>
                <div class="sidebar-item">
                    <i class="fas fa-users"></i>
                    <span>Friends</span>
                </div>
                <div class="sidebar-item">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Shop</span>
                </div>
            </div>


        </div>
    )
}

export default Sidebar;