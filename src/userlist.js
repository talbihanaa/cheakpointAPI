import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./carte";




const UserList= () => {
    const [list, setList]= useState([]);
    console.log('list', list);

    const getUser =()=>{
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
           setList(response.data)
        })
        .catch((error)=>{
            console.error(error)
        })

      }

    useEffect(()=>{
     
      getUser()
    },[])
    return (
        <div style={{border:"1px solid red", display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
        {list.map((item, index) => {
            return (
                <div>
                    <UserCard key={index} user={item}/>
                </div>
            )
        })}
        </div>
    )
}
export default UserList;