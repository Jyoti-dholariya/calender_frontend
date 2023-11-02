import React, { useState, useEffect } from "react";

const City = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("authToken");

  const loadUsers = async (e) => {
    const res = await fetch("http://onlinify.in/city", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("error");
    } else {
      setUsers(data);
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
                  <th scope="col">संख्या</th>
                  <th scope="col">शहर का नाम</th>
                </tr>

                <tbody className="text-center">
                  {users.map((user, index) => {
                    return (
                      <tr className="row-height" key={index}>
                        <th className="cell-padding" scope="row">
                          {index + 1}
                        </th>
                        <td className="cell-padding">{user.name}</td>
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
  );
};

export default City;
