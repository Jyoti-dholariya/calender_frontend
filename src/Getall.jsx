import React, { useState, useEffect } from "react";

const Getall = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("authToken");

  const loadUsers = async (e) => {
    const res = await fetch("http://onlinify.in/panchang", {
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
                  <th scope="col">तारीख</th>
                  <th scope="col">तिथि</th>
                  <th scope="col">राशि</th>
                  <th scope="col">नक्षत्र</th>
                  <th scope="col">नक्षत्र समय</th>
                  <th scope="col">विंछुड़ो</th>
                  <th scope="col">पंचक</th>
                  <th scope="col">त्योहार</th>
                  <th scope="col">बैंक छुट्टी</th>
                  <th scope="col">ऋतु</th>
                </tr>

                <tbody className="text-center">
                  {users.map((user, index) => (
                    <tr className="row-height">
                      <th className="cell-padding" scope="row">
                        {index + 1}
                      </th>
                      <td className="cell-padding name">
                        {new Date(user.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </td>

                      <td className="cell-padding name">{user.tithi}</td>
                      <td className="cell-padding name">{user.rashi}</td>
                      <td className="cell-padding name">{user.nakshtra}</td>
                      <td className="cell-padding name">{user.nakshtratime}</td>
                      <td className="cell-padding name">{user.vinchudo}</td>
                      <td className="cell-padding name">{user.panchak}</td>
                      <td className="cell-padding name">{user.festival}</td>
                      <td className="cell-padding name">{user.bankholiday}</td>
                      <td className="cell-padding name">{user.rutu}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Getall;
