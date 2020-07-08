import React, {Component} from 'react';
import Formbtnnav from './formBtnNav';



class Signformmodal extends Component {
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

        return (

            <div>
                <a className={"blue-btn header-sign-in"} onClick={this.handleOpenModal}>Войти</a>

                {this.state.showModal && (

                    <div className="modalFormWrap" >
                        <div className="modalOverlay" onClick={this.handleCloseModal}></div>
                         <div className="modalForm">

                                <Formbtnnav
                                showtab={this.props.showtab}
                                />
                             <button className="closeBtnModal" onClick={this.handleCloseModal}></button>

                        </div>
                    </div>
                )}


            </div>

        );
        }


}


export default Signformmodal;





