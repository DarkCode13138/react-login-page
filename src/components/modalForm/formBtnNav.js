import React, {Component} from 'react';
import Tab from './Tab';

class Formbtnnav extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showTabs: false,

        };
console.log(this.props.showtab);
        this.handleClickTab = this.handleClickTab.bind(this);
        this.handleClickTabRegistration = this.handleClickTabRegistration.bind(this);
    }

    handleClickTab () {
        this.setState({ showTabs: true });
    }

    handleClickTabRegistration () {
        this.setState({ showTabs: false });
    }

    render() {

        const isTabsView = this.state.showTabs;
        const login = this.state.showTabs ? 'active_popup-tab' : 'test';
        const registration = !this.state.showTabs ? 'active_popup-tab' : 'test';
        return (
           <div>
            <div className="b-iShack-popup-header">
                <a onClick={this.handleClickTab}
                   className={login + " " + "b-iShack-popup-header-sign-in b-iShack-popup-header-item"}>Регистрация</a>
                <a  onClick={this.handleClickTabRegistration}
                   className={registration + " " + "b-iShack-popup-header-sign-in b-iShack-popup-header-item"}>Вход</a>
            </div>
               <Tab
                   state={this.state}

               />
           </div>
            
        )
    }

}


export default Formbtnnav;