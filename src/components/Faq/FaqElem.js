import React from 'react';


const FAQ = ({faq, index, toggleFAQ}) => {
    return(
            <div
                 key={index}
                 className={"b-faq__element b-element " + (faq.open ? ' js-active' : '')}
                 onClick={() => toggleFAQ(index)}
            >
                <div className="b-element__question">
                    <div className="b-element__wrapper">{faq.question}
                    </div>
                </div>
                <div className="b-element__answer">
                    <p className="b-element__textual">{faq.answer}</p>
                </div>
            </div>

    )

}
export default FAQ;