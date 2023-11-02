import React, { useState, useEffect } from "react";
import img2 from './img/city.jpg'

const Addnakshtratime = () => {
    const [formData, setFormData] = useState({
        date: "",
        nakshtra: "",
        time: "",
      });
      const [nakshtraOptions, setNakshtraOptions] = useState([]);
   
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {
          date,
          nakshtra,
          time,
        } = formData;
    
        const res = await fetch("http://localhost:3009/nakshtratime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date,
            nakshtra,
            time,
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
            nakshtra: "",
            time: "",
          });
        }
      };
    
      useEffect(() => {
        // Fetch nakshtra options from the server
        fetch("http://localhost:3009/nakshtra") // Replace with your server endpoint
          .then((response) => response.json())
          .then((data) => {
            setNakshtraOptions(data); // Set the retrieved nakshtra options in state
          })
          .catch((error) => {
            console.error("Error fetching nakshtra options:", error);
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
            <h1 className="text-center">Nakshtra Time Data Add</h1>
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
                  समय
                  </label>
                  <input
                    type="text"
                    name="time"
                    class="form-control"
                    id="time"
                    aria-describedby="emailHelp"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

               
              </div>

              <div className="col-6">
              <img src={img2} alt=""  width="100%" />
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
  )
}

export default Addnakshtratime