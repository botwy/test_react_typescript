import React, { Component } from "react";
import { HeaderLeft } from "./Components/HeaderLeft";
import { HeaderRight } from "./Components/HeaderRight";
import { Logo } from "./Components/Logo";

export class Header extends Component {
    render(){
        return(
            <div className="app-header header-shadow">
                <Logo/>
                <div className="app-header__content">
                    <div className="app-header-left">
                        <HeaderLeft/>
                    </div>
                    <div className="app-header-right">
                        <HeaderRight/>
                    </div>
                </div>
            </div>
        );
    }
}