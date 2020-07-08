import React from 'react';

const form2 = () =>{
    return(
        <div className="b-iShack-popup-body">
            <form  className="b-iShack-popup-body-registration" id="b-iShack-sign-in-form">
                <label className="b-iShack-popup-form-email b-iShack-popup-form-inp ishack-js">Введите E-mail
                    <input name="user_email" placeholder="E-mail" required="" type="email"/>
                </label>

                <label className="b-iShack-popup-form-password b-iShack-popup-form-inp ishack-js">Введите пароль
                    <input name="user_password" placeholder="Пароль" required="" type="password"/>
                </label>
                <a className="forget-password" href="#">Забыли пароль?</a>
                <button className="blue-btn registration-btn" type="submit">Войти</button>

            </form>
        </div>
    )
}

export default form2;