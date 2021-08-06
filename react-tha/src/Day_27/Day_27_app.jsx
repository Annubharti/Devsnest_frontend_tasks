import React from "react";
import Index from './day_27_index'
import store from './store'
import { Provider } from "react-redux"
 

const Day27App = () =>{
    return (
    <Provider store={store}>
    <Index />
    </Provider>
    )
}

export default Day27App