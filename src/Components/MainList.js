import React, {useState,useEffect} from "react";
import './MainList.css'
const MainList=()=>{
    let counter = 0;
    const [data,setData]=useState([])
     const handleAddToList=()=>{
        let newData={
            inp1:document.getElementById('inp1').value,
            inp2:document.getElementById('inp2').value,
            inp3:document.getElementById('inp3').value,
            k:data.length+1
        }

        if(!newData.inp1 || !newData.inp2 || !newData.inp3){
            alert("Enter all values")
            return;
        }
      setData([...data,newData])
         document.getElementById('inp1').value=''
         document.getElementById('inp2').value=''
         document.getElementById('inp3').value=''


      }
    useEffect(() => {
        return () => {
            console.log(data)

        };
    },[data]);

    useEffect(() => {
        return () => {
            setData([])
        };
    }, []);
    let listItems=data.map((item)=>{
        return(
        <tr>
            <td>
                <b>{item.k}</b>
            </td>
            <td>
                {item.inp1}
            </td>
        <td>
            {item.inp2}
        </td>
        <td>
            {item.inp3}
        </td>
            </tr>)

    })
    return (
    <div>
        <table className='tabl'>
            <th>S.No</th>
            <th>Name of the Creator</th>
            <th>
                Role
            </th>
            <th>Royalty Split %</th>
            {listItems}

            <tr>
                <td>
                   <b>{data.length+1}</b>
                </td>
                <td>
                    <input type='text'  id='inp1' required='true' placeholder='START WITH @'/>
                </td>
                <td>
                    <input type='text' id='inp2' placeholder='SPECIFY A ROLE'/>
                </td>
                <td>
                    <input type='number' id='inp3' placeholder='ENTER A %'/>
                </td>

            </tr>
        </table>
        <button onClick={handleAddToList} className='btn'>+ Add more collaborators</button>



    </div>)
}
export default MainList