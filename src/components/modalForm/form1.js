import React, {Component} from "react";


const initialState = {
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    region: "",
    regionError: "",
    agreement: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    repeatPasswordError: "",

    status: "",
    messageStatus: "",
};

class FormRegistration extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";

        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let phoneError = "";
        let passwordError = "";
        let repeatPasswordError = "";
        let regionError = "";

        const isValidEmail = (email) => {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(email);
        }

        const isValidPhoneUniversal = (phone) => {
            let patternUniversal = new RegExp(/^[0-9 +\-\(\)]+$/i);
            return patternUniversal.test(phone);
        }

        if (!this.state.email) {
            emailError = "Обязательное поле";
        } else if (!isValidEmail(this.state.email)) {
            emailError = "Неверный формат";
        } else {
        console.log('else');
        }
        if (!this.state.phone) {
            phoneError = "Обязательное поле";
        } else if (!isValidPhoneUniversal(this.state.phone)) {
            phoneError = "Неверный формат"
        }

        if (!this.state.password) {

            passwordError = "Обязательное поле"

        } else if (this.state.password.length < 3 ){

            passwordError = "Минимум 3 символа"
        }

        if (!this.state.repeatPassword) {
            repeatPasswordError = "Обязательное поле"
        } else if (this.state.repeatPassword !== this.state.password){
            repeatPasswordError = "Пароли должны совпадать"
        } else if (this.state.repeatPassword === this.state.password){
            this.setState({
                repeatPasswordError: "",
            })
        }

        if (!this.state.region) {
            regionError = "Регион должен быть выбран"

        }

        console.log(this.state.repeatPassword === this.state.password);

        if (
            emailError
            || passwordError
            || phoneError
            || repeatPasswordError
            || regionError
        ) {
            this.setState({emailError, passwordError, phoneError, repeatPasswordError, regionError});
            return false;
        }

        return true;
    };


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log('validate true')
            console.log(this.state);
            // clear error form
            this.setState({
                regionError: "",
                agreement: "",
                emailError: "",
                phoneError: "",
                passwordError: "",
                repeatPasswordError: "",
            })


            const body = {}

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            };
            // let url  = 'https://jsonplaceholder.typicode.com/posts';
            // let url = 'https://jsonplaceholder.typicode.com/blablabla';
            // fetch(url, requestOptions)
            //     .then(response => {
            //         // const data = response.json();
            //
            //         if (response.ok) {
            //
            //             this.setState(initialState);
            //             this.setState({
            //                 messageStatus: true,
            //                 status: true,
            //             })
            //
            //         } else {
            //             this.setState(initialState);
            //             this.setState({
            //                 status: true,
            //                 messageStatus: false,
            //
            //             })
            //         }
            //
            //     })
            //     .catch(err => {
            //
            //         this.setState(initialState);
            //         this.setState({
            //             status: true,
            //             messageStatus: false,
            //
            //         })
            //     })


        }

    };

    render() {
        console.log(this.state.email);
        return (

            <div className="b-iShack-popup-body">
                <form className="b-iShack-popup-body-registration" id="b-iShack-registration-form"
                      onSubmit={this.handleSubmit}>
                    <label className="b-iShack-popup-form-email b-iShack-popup-form-inp ishack-js">Введите E-mail
                        <input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            onFocus={this.validate}
                        />
                        <div style={{fontSize: 12, color: "red", position: "absolute", bottom: "0",}}>
                            {this.state.emailError}
                        </div>
                    </label>
                    <label className="b-iShack-popup-form-tel b-iShack-popup-form-inp ishack-js">Введите телефон
                        <input
                            type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}


                        />
                        <div style={{fontSize: 12, color: "red", position: "absolute", bottom: "0",}}>
                            {this.state.phoneError}
                        </div>
                    </label>
                    <label className="b-iShack-popup-form-password b-iShack-popup-form-inp ishack-js">Введите пароль
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div style={{fontSize: 12, color: "red", position: "absolute", bottom: "0",}}>
                            {this.state.passwordError}
                        </div>
                    </label>
                    <label className="b-iShack-popup-form-password-repeat b-iShack-popup-form-inp ishack-js">Повторите
                        пароль
                        <input
                            name="repeatPassword"
                            type="password"
                            value={this.state.repeatPassword}
                            onChange={this.handleChange}
                        />
                        <div style={{fontSize: 12, color: "red", position: "absolute", bottom: "0",}}>
                            {this.state.repeatPasswordError}
                        </div>
                    </label>
                    <label className="b-iShack-popup-form-email b-iShack-popup-form-inp ishack-js">Выберите регион
                        <select className="b-iShack-popup-form-select" name="region" value={this.state.region} onChange={this.handleChange}>

                            <option>Регион</option>
                            <option value="Belarus">Беларусь</option>
                            <option value="Russia">Россия</option>
                            <option value="Kazakhstan">Казахстан</option>

                        </select>
                        <div style={{fontSize: 12, color: "red", position: "absolute", bottom: "-15px",}}>
                            {this.state.regionError}
                        </div>
                    </label>
                    <div className="checkbox-container">
                        <input className="checkbox" id="checkbox-accept-user-agreement" name="checkbox-agreement"
                               type="checkbox"/>
                        <label className="b-iShack-popup-form-inp-checkbox ishack-js"
                               htmlFor='checkbox-accept-user-agreement'><span>Примите <a
                            href="#">пользовательское соглашение</a></span> </label>
                    </div>
                    <button className="blue-btn registration-btn" type="submit">Зарегистрироваться</button>

                </form>

            </div>


        )
    }
}

export default FormRegistration;