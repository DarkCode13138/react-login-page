import React,{Component} from 'react';
// import AnchorLink from "react-anchor-link-smooth-scroll";


import AnchorLink from "react-anchor-link-smooth-scroll";

class MenuItems extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            active: false
        }
    }

     toggle = () => {
         this.setState({
             active: !this.state.active
         });
            console.log(this.state.active)
        }


  render() {

      let classes = this.state.active ? ' active' : ' ';

    return (
        <div className="menu">
        <ul className={classes}>


            {this.props.post.map((todo, index) =>

                <li className="b-iShack-header-nav-item" key={index}>
                    <AnchorLink  onClick={this.toggle.bind(this)} className="b-iShack-header-link" href={todo.href}>{todo.text}</AnchorLink>
                </li>
            )}


        </ul>
            <button className={"menuButton" + classes} onClick={this.toggle.bind(this)}>
                <span className="bar"></span>
            </button>
        </div>
    );

  }
}
export default MenuItems;