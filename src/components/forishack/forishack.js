import React, {useState} from 'react';
import for_1 from "../../images/for-1.svg";
import for_2 from "../../images/for-2.svg";
import for_3 from "../../images/for-3.svg";
import for_4 from "../../images/for-4.svg";
import for_5 from "../../images/for-5.svg";
import ForElem from './ForElem';


const Forishack = () => {

    const [elem] = useState([
        {
            for: 'Для новичков. Сервис прост и понятен в использовании.А чтобы было еще удобней, мы подготовили для вас ',
            href:    'чек-лист по запуску контекстной рекламы.',
            image:      for_1
        },
        {
            for: 'Для специалистов. Объединяйте работу с рекламными кампаниями Google и Яндекса в одном аккаунте со всем необходимым функционалом',
            href:    '',
            image:      for_2
        },
        {
            for: 'Для физических лиц. Сервис прост и понятен в использовании. А чтобы было еще удобней, мы подготовили для вас чек-лист по запуску контекстной рекламы. ',
            href:    '',
            image:      for_3
        },
        {
            for: 'Для юридических лиц. Работайте в сервисе и получайте все необходимые документы (счета, акты, договоры)',
            href:    '',
            image:      for_4
        },
        {
            for: 'Для рекламных агентств/фрилансеров. Создавайте клиентские аккаунты и управляйте ими через один общий аккаунт. А еще обратите внимание на нашу',
            href:    'партнерскую программу',
            image:      for_5
        },
    ])

    return(
        <div className="b-iShack-for  b-iShack" id="b-iShack-for">
            <div className="b-iShack-container">
                <h3>Для кого этот сервис?</h3>

                <div className="b-iShack-for-wrapp">
                    {elem.map(( elem, i ) => (
                            <ForElem
                                elem={elem} index={i} key={i}
                            />
                        )
                    )}

                </div>
            </div>
        </div>


    )

}
export default Forishack;