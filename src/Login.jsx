import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./style/form.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://onlinify.in/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.status === 200) {
        const data = await res.json();
        const token = data.token; // Assuming the server sends the token in the response
        localStorage.setItem("authToken", token); // Store the token in localStorage
        navigate("/caldata"); // Redirect to another page
      } else {
        const data = await res.json();
        alert(data.error || "Email or password is incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };  


  return (
    <div className="container login">
      <div className="row">
        <div className="col">
          <div className="login-form bg-dark text-white p-5 mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="mt-5 login-data">
              <div className="row">
                <div className="col">
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

              
              <button type="submit">Login</button>
              <p className="mt-3">
                If not have Register click on
                <span>
                  <NavLink to="/registeration"> Signin</NavLink>
                </span>
              </p>
            </form>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
