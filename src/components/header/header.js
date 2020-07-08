import React, {Component} from  "react";
import Signformmodal  from "../modalForm/signform";
import logo from "../../images/iShack-logo.svg";
import MenuItem from './menuitem';


const links  = [
    {id: 1, href: '#b-iShack-todo', text: 'Возможности сервиса'},
    {id: 2, href: '#b-iShack-for', text: 'Кому полезно'},
    {id: 3, href: '#b-iShack-reward', text: 'Партнерская программа'},
    {id: 4, href: '#b-iShack-use-guide', text: 'Помощь'},
    {id: 5, href: '#b-iShack-faq', text: 'FAQ'},
]


class Header extends React.Component{


    render() {


    return (

    <header id="header" className="b-iShack-header b-iShack">
        <div className="b-iShack-container">
            <a className="b-iShack-header-logo" href="#">
                <img src={logo}/>
            </a>
            <div className="b-iShack-header-nav b-iShack-nav">

                 <MenuItem post={links}

                 />

            </div>
            <div className="b-iShack-header-sign-in">

                <Signformmodal

                />

            </div>

        </div>
    </header>

    )
}
}

export  default Header;