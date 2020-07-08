import React from 'react';
import icon_phone from "../../images/icon_phone.svg";
import icon_mail from "../../images/icon_mail.svg";
import MenuItem from "../header/menuitem";
import ContactsEl from './ContactsEl';
import AnchorLink from "react-anchor-link-smooth-scroll";


const links  = [
    {id: 1, href: '#b-iShack-todo', text: 'Возможности сервиса'},
    {id: 2, href: '#b-iShack-for', text: 'Кому полезно'},
    {id: 3, href: '#b-iShack-reward', text: 'Партнерская программа'},
    {id: 4, href: '#b-iShack-use-guide', text: 'Помощь'},
    {id: 5, href: '#b-iShack-faq', text: 'FAQ'},
]
const contact = [
    { view:'tel' ,contact: '+375 29 123 45 67', image: icon_phone},
    { view:'mailto', contact: 'info@ishak.com', image: icon_mail},
]
const Footer = () => {

    return(

        <footer className="b-iShack-footer b-iShack">
            <div className="b-footer__contact-border">
                <div className="b-iShack-container">

                    <ul className="b-footer__contact">
                        {contact.map((content, i) => (
                            <ContactsEl
                            key={i}
                            content={content}
                            />
                            )
                        )
                        }
                    </ul>
                </div>
            </div>
            <div className="b-iShack-container">
                <div className="b-iShack-footer-nav b-iShack-nav">
                    <MenuItem post={links}/>
                </div>
            </div>
            <div className="b-iShack-container">
                <div className="b-iShack-footer-bottom">
                    <a className="b-footer__conditions"  href="#b-conditions">© 2020 iShack Условия
                        использования</a>
                    <AnchorLink  className="b-footer__up" href="#root">Вверх</AnchorLink>
                </div>
            </div>
        </footer>

    )
}

export default Footer;