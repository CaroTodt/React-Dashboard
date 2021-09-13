import React from 'react'
import './topbar.css'
import {NotificationsNone , Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
