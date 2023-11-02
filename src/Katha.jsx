import React, { useState, useEffect } from "react";

const Katha = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("authToken");
   
    const loadUsers = async(e) => {
     const res = await fetch('http://onlinify.in/katha',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`,
      }
     })
     const data = await res.json();
    if(res.status === 400 || !data){
      alert("error")
    }else{
      setUsers(data)
     
    }
    };
  
    useEffect(() => {
      loadUsers();
    }, []);
  return (
    <>
    <>
     <div className="dedata mt-5">
         <div className="card de_card">
           <div className="card-header p-3"></div>
           <div className="card-body p-3">
             <table className="table">
                 <tr className="text-center">
                   <th scope="col">No</th>
                   <th scope="col">date</th>
                   <th scope="col">vrat</th>
                   <th scope="col">katha</th>
                 </tr>

               <tbody className="text-center">
               {users.map((user, index) => {
  const userDate = new Date(user.date);
  const day = userDate.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
  const month = (userDate.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-indexed) and pad with leading zero if needed
  const year = userDate.getFullYear(); // Get year

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <tr className="row-height" key={index}>
      <th className="cell-padding" scope="row">{index + 1}</th>
      <td className="cell-padding name">{formattedDate}</td>
      <td className="cell-padding name">{user.vrat}</td>
      <td className="cell-padding name">{user.katha}</td>
      <td></td>
    </tr>
  );
})}

                
                  
               </tbody>
             </table>
           </div>
         </div>
       </div>
   </>
   </>
  )
}

export default Katha