import React, {Component} from 'react';
import main_img from "../../images/main-img.png";
import Formbtnnav from "../modalForm/formBtnNav";


class MainBaner extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showModal: false,

        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }


    render () {
    return(

        <div className="b-iShack-main b-iShack">
            <div className="b-iShack-container">
                <div className="b-iShack-main-info">
                    <h2>iShack – ваш бесплатный помощник
                        для автоматизации запуска и ведения контекстной рекламы
                    </h2>
                    <h3>Первый сервис в Беларуси, в котором вы можете работать
                        с <span>Google Рекламой</span> и <span>Яндекс.Директом</span> из одного аккаунта
                    </h3>
                    <a className="sing-in-btn blue-btn" onClick={this.handleOpenModal}>Войти в систему</a>

                    {this.state.showModal && (

                        <div className="modalFormWrap" >
                            <div className="modalOverlay" onClick={this.handleCloseModal}></div>
                            <div className="modalForm">

                                <Formbtnnav
                                />
                                <button className="closeBtnModal" onClick={this.handleCloseModal}></button>

                            </div>
                        </div>
                    )}


                </div>
                <div className="b-iShack-main-img">
                    <img src={main_img}/>
                </div>
            </div>
        </div>


    )
}
}

export default MainBaner;