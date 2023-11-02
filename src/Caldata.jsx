import React, { useState, useEffect } from "react";

const Caldata = () => {
  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    date: "",
    tithi: "",
    rashi: "",
    nakshtra: "",
    nakshtratime:"",
    vinchudo: "",
    panchak: "",
    festival: "",
    bankholiday: "",
    rutu: "",
  });
  const [rashiOptions, setRashiOptions] = useState([]);
  const [nakshtraOptions, setNakshtraOptions] = useState([]);
  const [rutuOptions, setRutuOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {
      date,
      tithi,
      rashi,
      nakshtra,
      nakshtratime,
      vinchudo,
      panchak,
      festival,
      bankholiday,
      rutu,
    } = formData;

    const res = await fetch("http://onlinify.in/addpanchang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        date,
        tithi,
        rashi,
        nakshtra,
        nakshtratime,
        vinchudo,
        panchak,
        festival,
        bankholiday,
        rutu,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Data add");
      console.log("Data add");
      setFormData({
        date: "",
        tithi: "",
        rashi: "",
        nakshtra: "",
        nakshtratime:"",
        vinchudo: "",
        panchak: "",
        festival: "",
        bankholiday:"",
        rutu: "",
      });
    }
  };

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("authToken");
  
    // Fetch nakshtra options from the server with the token
    fetch("http://onlinify.in/nakshtra", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // Handle unauthorized access (e.g., token expired or invalid)
          console.error("Unauthorized access");
          // You may want to redirect the user to the login page or handle the error as needed.
        } else if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Error fetching nakshtra options");
        }
      })
      .then((data) => {
        setNakshtraOptions(data); // Set the retrieved nakshtra options in state
      })
      .catch((error) => {
        console.error("Error fetching nakshtra options:", error);
      });
  }, []);
  

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("authToken");
  
    // Fetch rashi options from the server with the token
    fetch("http://onlinify.in/rashi", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // Handle unauthorized access (e.g., token expired or invalid)
          console.error("Unauthorized access");
          // You may want to redirect the user to the login page or handle the error as needed.
        } else if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Error fetching rashi options");
        }
      })
      .then((data) => {
        setRashiOptions(data); // Set the retrieved rashi options in state
      })
      .catch((error) => {
        console.error("Error fetching rashi options:", error);
      });
  }, []);
  

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("authToken");
  
    // Fetch rutu options from the server with the token
    fetch("http://onlinify.in/rutu", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // Handle unauthorized access (e.g., token expired or invalid)
          console.error("Unauthorized access");
          // You may want to redirect the user to the login page or handle the error as needed.
        } else if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Error fetching rutu options");
        }
      })
      .then((data) => {
        setRutuOptions(data); // Set the retrieved rutu options in state
      })
      .catch((error) => {
        console.error("Error fetching rutu options:", error);
      });
  }, []);
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form
              className="bg-dark text-white mt-5 p-5 mb-5"
              onSubmit={handleSubmit}
            >
              <h1 className="text-center">Calender Data Add</h1>
              <div className="row mt-5">
                <div className="col-6">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      तारीख
                    </label>
                    <input
                      type="date"
                      name="date"
                      class="form-control"
                      id="date"
                      aria-describedby="emailHelp"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      तिथि
                    </label>
                    <input
                      type="text"
                      name="tithi"
                      class="form-control"
                      id="tithi"
                      aria-describedby="emailHelp"
                      value={formData.tithi}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="rashi" className="form-label">
                      राशि
                    </label>
                    <select
                      name="rashi"
                      className="form-select"
                      id="rashi"
                      value={formData.rashi}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Rashi</option>
                      {rashiOptions.map((option, index) => (
                        <option key={index} value={option.rashi}>
                          {option.rashi}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="nakshtra" className="form-label">
                      नक्षत्र
                    </label>

                    <select
                      name="nakshtra"
                      className="form-select"
                      id="nakshtra"
                      value={formData.nakshtra}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Nakshtra</option>
                      {nakshtraOptions.map((option, index) => (
                        <option key={index} value={option.nakshtra}>
                          {option.nakshtra}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    नक्षत्र समय
                    </label>
                    <input
                      type="text"
                      name="nakshtratime"
                      class="form-control"
                      id="nakshtratime"
                      aria-describedby="emailHelp"
                      value={formData.nakshtratime}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  
                </div>

                <div className="col-6">

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      विंछुड़ो
                    </label>
                    <input
                      type="text"
                      name="vinchudo"
                      class="form-control"
                      id="vinchudo"
                      aria-describedby="emailHelp"
                      value={formData.vinchudo}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      पंचक
                    </label>
                    <input
                      type="text"
                      name="panchak"
                      class="form-control"
                      id="panchak"
                      aria-describedby="emailHelp"
                      value={formData.panchak}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  {/* <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    सूर्योदय
                  </label>
                  <input
                    type="text"
                    name="sunrise"
                    class="form-control"
                    id="sunrise"
                    aria-describedby="emailHelp"
                    value={formData.sunrise}
                    onChange={handleChange}
                    required
                  />
                </div> */}

<div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      बैंक छुट्टी
                    </label>
                    <input
                      type="text"
                      name="bankholiday"
                      class="form-control"
                      id="bankholiday"
                      aria-describedby="emailHelp"
                      value={formData.bankholiday}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      त्योहार
                    </label>
                    <input
                      type="text"
                      name="festival"
                      class="form-control"
                      id="festival"
                      aria-describedby="emailHelp"
                      value={formData.festival}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  


                  <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                      ऋतु
                    </label>

                    <select
                      name="rutu"
                      className="form-select"
                      id="rutu"
                      value={formData.rutu}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Rutu</option>
                      {rutuOptions.map((option, index) => (
                        <option key={index} value={option.rutu}>
                          {option.rutu}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Caldata;
