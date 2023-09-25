import { useState } from 'react'
import Datacontext from './Datacontext'
const Datastate = (props)=>{
    var back="https://manish-ka-carbon-ka-gota.onrender.com/"
    const noteinitial = []
    const [factory, setfactory] = useState(noteinitial)
    const [loading, setLoading] = useState(false)

    
    const getfactory = async () => {
        await setLoading(true)
        console.log("Data Fetching")

        const response = await fetch(`${back}app/getfactory`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            }
        });
        if(response){
            setLoading(false);
            console.log("Data fetched")
        }
        const json=await response.json()
        setfactory(json.factory)
    }
    
    return (
        <Datacontext.Provider value={{getfactory,factory, loading}}>
            {props.children}
        </Datacontext.Provider>
    )
}
export default Datastate