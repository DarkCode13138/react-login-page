import React, {useState} from 'react';
import FAQELEMENT from './FaqElem';



const Faq = () => {

    const [faqs, setfaqs] = useState([
        {
            question: 'Могу ли я воспользоваться вашим предложением, если я физическое лицо?',
            answer:    'К сожалению нет, в бонусной программе участвуют только юридические лица, заказавшие услуги у наших партнеров.',
            open:      false
        },
        {
            question: 'Могу ли я воспользоваться сразу всеми бонусами из вашего предложения, или мне нужно выбрать только один?',
            answer:    'К сожалению нет, в бонусной программе участвуют только юридические лица, заказавшие услуги у наших партнеров',
            open:      false
        },
        {
            question: 'Сколько примерно я сэкономлю на создании рекламной кампании, если воспользуюсь скидкой 50%?',
            answer:    'К сожалению нет, в бонусной программе участвуют только юридические лица, заказавшие услуги у наших партнеров.',
            open:      false
        },
        {
            question: 'Что значит: вы компенсируете 90 у.е. на рекламу в Google? Как это происходит?',
            answer:    'К сожалению нет, в бонусной программе участвуют только юридические лица, заказавшие услуги у наших партнеров.',
            open:      false
        },
    ])

    const toggleFAQ  = index => {
        setfaqs(faqs.map((faq, i) => {
            if(i === index){
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))

    }

    return(
        <div className="b-iShack-faq  b-iShack" id="b-iShack-faq">
            <div className="className">
                <h3>Часто задаваемые вопросы</h3>
                    <div className="b-faq__elements">
                        {faqs.map((faq, i) => (
                                    <FAQELEMENT faq={faq} index={i} toggleFAQ={toggleFAQ }  key={i}/>
                                )
                            )
                        }
                    </div>
            </div>
        </div>
    )
}
export default Faq;