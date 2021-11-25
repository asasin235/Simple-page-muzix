import React, {useState,useEffect} from "react";

const MainList=()=>{
    let counter = 0;
    const [data,setData]=useState([])
     const handleAddToList=()=>{

      setData([...data,{
          inp1:document.getElementById('inp1').value,
          inp2:document.getElementById('inp2').value,
          inp3:document.getElementById('inp3').value,
          k:data.length
      }])
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
    var listItems=data.map((item)=>{
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
        <table>
            <th>S.No</th>
            <th>Name of the Creator</th>
            <th>
                Role
            </th>
            <th>Royalty Split %</th>
            {listItems}

            <tr>
                <td>
                   <b>{data.length}</b>
                </td>
                <td>
                    <input type='text'  id='inp1'/>
                </td>
                <td>
                    <input type='text' id='inp2'/>
                </td>
                <td>
                    <input type='text' id='inp3'/>
                </td>


            </tr>
        </table>
        <button onClick={handleAddToList}>+ Add more collaborators</button>
        <span>Name of the creator Role Royalty Split</span>


    </div>)
}
export default MainList