import React ,{useState,useEffect} from "react";
import MainList from "./MainList";
function Mainform(props){
    const isTicked=props.tick
    if(isTicked){
       return(
           <MainList/>
       )
    }else{
        return null
    }

}
export default Mainform