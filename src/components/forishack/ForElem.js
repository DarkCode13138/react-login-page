import React from "react";

    const ForElem  = (elem) => {
        return(
        <div className="b-iShack-for-item" >
            <div className="b-iShack-for-img-wrap">
              <img src={elem.elem.image} alt="#"/>
            </div>
            <p className="b-iShack-text b-iShack-for-info"><span>{elem.elem.for}</span><a href="#"> {elem.elem.href}</a>
            </p>
        </div>
        )
    }

export default ForElem;