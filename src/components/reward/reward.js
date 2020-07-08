import React from 'react';
import pay from "../../images/pay.svg";

const reward = () => {
    return(
        <div className="b-iShack-reward  b-iShack" id="b-iShack-reward">
            <div className="b-iShack-container">
                <div className="b-iShack-reward-text">
                    <h3>Вознаграждение за работу</h3>
                    <div className="b-iShack-reward-text-container">
                        <p>Lorem Ipsum ежедневно растет, и мы рады наградить партнеров, помогающих нам расти еще быстрее. Вы
                            можете
                            получить вознаграждение <span>до 35%</span> от рекламных бюджетов аккаунтов под управлением
                            и <span>6%</span>
                            от дохода
                            пользователей,
                            привлеченных по вашей рекомендации.
                        </p>
                        <p>Привлекать новых клиентов можно обоими способами одновременно!</p>
                    </div>
                    <a className="learn-more-btn blue-btn">Узнать подробнее</a>
                </div>
                <div className="b-iShack-reward-img">
                    <img src={pay}/>
                </div>
            </div>
        </div>

    )
}
export default reward;