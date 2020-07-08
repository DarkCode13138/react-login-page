import React from 'react';
import FormRegistration from './form1';
import Form2 from './form2';

const Tab = (props) =>{
   if(props.state.showTabs) return(
            <FormRegistration/>
    )
    return(
        <Form2/>
    )

}


export default Tab;
