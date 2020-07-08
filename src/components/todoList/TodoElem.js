import React from "react";


const TODOELEM = (content, index) => {
    return(
        <div className="b-iShack-todo-item">
            <div className="b-iShack-todo-item-img">
                <img src={content.content.image} alt="#"/>
            </div>
         <p className="b-iShack-text b-iShack-todo-info">    {content.content.content}
            </p>
        </div>
    )
}

export default TODOELEM;