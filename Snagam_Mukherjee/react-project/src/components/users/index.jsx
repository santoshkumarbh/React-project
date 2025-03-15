import { useEffect, useState } from "react";

function Users(){

    const [usersList,setUsersList]=useState([]);
    const [pending,setPending]=useState(false);

    async function  fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse=await fetch('https://dummyjson.com/users');
            const result=await apiResponse.json();

            if(result?.users){
                setUsersList(result?.users)
                setPending(false);
            }
            else{
                setUsersList([]);
                setPending(false);
            }
           
            
        } catch (error) {
            console.log(error);
            
        }
    }

    console.log(usersList);
    

    // useEffect(()=>{
    //     fetchAllUsers()
    // },[])


    

    


    if(pending)
        return <h1>Fetching Users! plz wait</h1>


    return(
        <>
            <h1>All users list</h1>
            <button onClick={fetchAllUsers}>Fectch Users </button>
            <ul>
                {
                    usersList && usersList.length>0 ?
                    usersList.map((userItem)=><li>
                        <p>{userItem?.firstName}    {userItem?.lastName}</p>
                    </li>) : <h1>No Users found!</h1>
                }
            </ul>
          
            
        </>
    )
}

export default Users;