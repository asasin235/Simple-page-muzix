import React, {useEffect, useState} from "react";
import Mainform from "./Mainform";
function Form(){

    const [checkbox,setCheckbox]=useState(true)

    const handleCickCheckbox =()=>{
        checkbox===true?setCheckbox(false):setCheckbox(true)
    }



    return (
        <>
        <label>ADD COLLABORATORS/ CO-CONTRIBUTORS</label>
        <input type="checkbox" checked={checkbox} onClick={handleCickCheckbox}/>
            <Mainform tick={checkbox}/>
        </>
    )
}
export default Form