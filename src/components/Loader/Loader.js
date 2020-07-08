import React from 'react';
import Styles from './Loader.module.css';


const Loader = () => {
    return(
        <div className={Styles.loader}>
            <div className={[Styles.inner, Styles.one].join(' ')}></div>
            <div className={[Styles.inner, Styles.two].join(' ')}></div>
            <div className={[Styles.inner, Styles.three].join(' ')}></div>
        </div>
    )

}

export default Loader;
