import React from "react";


const ContactsEl = (content) => {

let contactLink = content.content.view + ':' + content.content.contact.replace(/\s/g, '');

    return(
        <li className="b-footer__contact-phones">
            <a className="b-footer__contact-link" href={ contactLink }>
                <img src={content.content.image} alt="#"/>
            </a>
            <div className="b-footer__contact-phones-inner">
                <a className="b-footer__contact-phones-link" href={contactLink }>{content.content.contact}</a>
            </div>
        </li>
    )
}
export default ContactsEl;