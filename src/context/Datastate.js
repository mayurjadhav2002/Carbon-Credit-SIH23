import { useState } from 'react'
import Datacontext from './Datacontext'
const Datastate = (props)=>{
    var back="https://manish-ka-carbon-ka-gota.onrender.com/"
    const noteinitial = []
    const [factory, setfactory] = useState(noteinitial)


    
    const getfactory = async () => {
        const response = await fetch(`${back}app/getfactory`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            }
        });
        const json=await response.json()
        setfactory(json.factory)
    }
    
    return (
        <Datacontext.Provider value={{getfactory,factory}}>
            {props.children}
        </Datacontext.Provider>
    )
}
export default Datastate