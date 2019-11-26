import React, { Component, Fragment } from "react";

export class Logo extends Component {
    render(){
        return(
            <Fragment>
            <div className="app-header__logo">
                <div className="logo-src"></div>
                <div className="header__pane ml-auto">
                    <div>
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
                        </button>
                    </div>
                </div>
            </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
            <span className="hamburger-inner"> </span>
            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
            <span>
            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
            <i className="fa fa-ellipsis-v fa-w-6"> </i>
            </span>
            </button>
            </span>
                </div>
            </Fragment>
        );
    }
}