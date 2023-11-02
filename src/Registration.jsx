import React, { useState } from "react";
import { NavLink, useNavigate  } from 'react-router-dom';

const Registration = () => {
  const navigate  = useNavigate ();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an API request to register the user
    try {
      const res = await fetch("http://localhost:3009/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
        alert("error");
        console.log("error");
      } else {
        alert("Registration successful");
        // Navigate to the login page
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="col">
            <div className="login-form bg-dark text-white p-5 mt-5">
              <h2 className="text-center">Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    Username:
                    </label>
                    <input
                      type="username"
                      name="username"
                      class="form-control"
                      aria-describedby="emailHelp"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>


                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      aria-describedby="emailHelp"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
