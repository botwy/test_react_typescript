import React, { Component, Fragment } from "react";

export class HeaderLeft extends Component {
    render(){
        return(
            <Fragment>
                <div className="search-wrapper">
                    <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Type to search"/>
                        <button className="search-icon"><span></span></button>
                    </div>
                    <button className="close"></button>
                </div>
                <ul className="header-menu nav">
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="nav-link-icon fa fa-database"> </i>
                            Statistics
                        </a>
                    </li>
                    <li className="btn-group nav-item">
                        <a className="nav-link">
                            <i className="nav-link-icon fa fa-edit"></i>
                            Projects
                        </a>
                    </li>
                    <li className="dropdown nav-item">
                        <a className="nav-link">
                            <i className="nav-link-icon fa fa-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

