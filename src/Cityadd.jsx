import React, { useState } from "react";
import city from './img/city.jpg';

const Cityadd = () => {
    const [formData, setFormData] = useState({
        name: "",
        lat: "",
        lng: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const {
          name,
          lat,
          lng,
        } = formData;

        const token = localStorage.getItem("authToken");
    
        const res = await fetch("http://onlinify.in/addcity", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            lat,
            lng,
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
            name: "",
            lat: "",
            lng: "",
          });
        }
      };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form
              className="bg-dark text-white mt-5 p-5 mb-5"
              onSubmit={handleSubmit}
            >
              <h1 className="text-center">City Data Add</h1>
              <div className="row mt-5">
                <div className="col-6">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      शहर का नाम
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    अक्षांश
                    </label>
                    <input
                      type="text"
                      name="lat"
                      class="form-control"
                      id="lat"
                      aria-describedby="emailHelp"
                      value={formData.lat}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                    देशान्तर
                    </label>
                    <input
                      type="text"
                      name="lng"
                      class="form-control"
                      id="lng"
                      aria-describedby="emailHelp"
                      value={formData.lng}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="col-6">
                    <img src={city} alt="" width="100%" />
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

export default Cityadd;
