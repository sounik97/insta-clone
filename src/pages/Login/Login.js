import React from 'react'
import { useHistory, Route } from "react-router-dom";

export default function Login() {

    const history    = useHistory();
    const navigateTo = () => history.push('/login');
    return (
        
        <div>
            <Route path="/login" component={Login}/>
        </div>
        
    )
}
