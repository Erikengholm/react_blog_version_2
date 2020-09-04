import React,{useContext} from 'react'
import {userContext} from '../UserContext';

function log_button(props) {
    const { setUser } = useContext(userContext);
    
    if(props.first){
        return <div className="Log-in-Button"><button onClick={()=>setUser(props.text)}>Log in</button> </div>
    }
        
    else{
        return <div className="Log-in-Button"><button onClick={() => props.showLogin(false)} >Avbryt</button></div>
    }
}

export default log_button