import React,{Component} from 'react';
import Loader from '../Loader/Loader';


const initialState = {
    name: "",
    email: "",
    phone: "",
    site: "",
    question: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    siteError:"",
    questionError: "",
    progress: "",
    status: "",
    messageStatus: "",
};

class MainForm extends Component {
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
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let siteError = "";
        let questionError = "";

        const isValidPhoneUniversal = (phone) =>  {
            let patternUniversal = new RegExp(/^[0-9 +\-\(\)]+$/i);
            return patternUniversal.test(phone);
        }

        const isValidEmail = (email) => {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(email);
        }

        const isValidSite = (site) => {
            let pattern = new RegExp(/^(([а-яёa-z0-9]{1})((\.[а-яёa-z0-9-])|([а-яёa-z0-9-]))*\.([а-яёa-z]{2,7})(\/?)$)/i);
            return pattern.test(site);
        }

        if (!this.state.name) {
            nameError = "Обязательное поле";
        }

        if (!this.state.email) {
            emailError = "Обязательное поле";
        } else if (!isValidEmail(this.state.email)){
            emailError = "Неверный формат";
        }

        if (!this.state.phone) {
              phoneError = "Обязательное поле";
        } else if (!isValidPhoneUniversal(this.state.phone)) {
            phoneError = "Неверный формат"
        }

        if (!this.state.site) {
              siteError = ""

        } else if(!isValidSite(this.state.site)){
            siteError = "Неверный формат"
        }

        if (!this.state.question) {
            questionError = "Обязательное поле";
        } else if (this.state.question.length <= 2){
            questionError = "Введите не меньше двух символов";
        }

        if (
            emailError
            || nameError
            || phoneError
            || siteError
            || questionError
        )

        {
            this.setState({ emailError, nameError, phoneError, siteError, questionError });
            return false;
        }

        return true;
    };


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);
            // this.setState(initialState);
            // clear form
            this.setState({
                progress: "disabled",
            });
            const body = {
                name: this.state.name,
                email:  this.state.email,
                phone: this.state.phone,
                site: this.state.site,
                question: this.state.question,
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            };
            // let url  = 'https://jsonplaceholder.typicode.com/posts';
            let url  = 'https://jsonplaceholder.typicode.com/blablabla';
            fetch(url, requestOptions)
                .then( response => {
                    // const data = response.json();

                    if (response.ok) {

                    this.setState(initialState);
                    this.setState({
                        messageStatus: true,
                        status : true,
                    })

                    } else {
                        this.setState(initialState);
                        this.setState({
                            status: true,
                            messageStatus: false,

                        })
                    }

                })
                .catch(err => {

                    this.setState(initialState);
                    this.setState({
                        status: true,
                        messageStatus: false,

                    })
                })





        }

    };

setProgress = () =>{
    this.setState({
        status: '',
        messageStatus: '',
    })
}

render() {

    let message =  (this.state.messageStatus ? 'Ваше сообщение успешно отправлено' : 'Упссс...Что-то пошло не так')
    const loader =  <Loader/>;

    return (

        <div className="b-iShack-form  b-iShack">
            {this.state.progress ? loader : null}
            {this.state.status && (
                <div className="sendingMessageWrap" >
                    <div className="sendingMessageOverlay" onClick={this.setProgress}></div>
                      <div className="sendingMessage">

                        <h3>{message}</h3>
                        <button className="closeBtnModal" onClick={this.setProgress}></button>

                    </div>
                </div>
            )}

            <div className={this.state.progress + " b-iShack-container"}>
                <h3>Остались вопросы по работе сервиса?</h3>
                <p>Оставьте заявку, и мы свяжемся с вами</p>
                <form id="iShack-form" onSubmit={this.handleSubmit} >
                    <label className="b-label-inp name-inp ishack-js">
                        <input  name="name"
                                placeholder="Имя"
                                value={this.state.name}
                                type="text"
                               onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nameError}
                        </div>
                    </label>
                    <label className="b-label-inp mail-inp ishack-js">
                        <input name="email"
                               placeholder="E-mail"
                               type="text"
                               value={this.state.email}
                               onChange={this.handleChange}

                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                        </div>
                    </label>
                    <label className="b-label-inp tel-inp ishack-js">
                        <input
                            name="phone"
                            placeholder="Телефон"
                            type="tel"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />

                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.phoneError}
                        </div>
                    </label>
                    <label className="b-label-inp site-inp ishack-js">
                        <input name="site"
                               placeholder="Сайт"
                               type="text"
                               value={this.state.site}
                               onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.siteError}
                        </div>
                    </label>
                    <label className="b-label-textarea b-label-inp message-textarea ishack-js">
                        <textarea
                            name="question"
                            placeholder="Вопрос"
                            value={this.state.question}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.questionError}
                        </div>
                    </label>
                    <button  disabled={this.state.progress} className="iShack-form-btn blue-btn"type="submit">Отправить</button>

                </form>

            </div>
        </div>

    )
}
}
export default MainForm;