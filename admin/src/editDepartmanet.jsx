import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header.jsx";
import SideBar from "./sideBar.jsx";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDepartament() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://localhost:7211/api/departments/${id}`).then((res) => {
      const data = res.data;
    
      setDescription(data.description);
      setTitle(data.title);
      setActive(data.isActive);
    });
  }, [id]);

  console.log(active);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      IsActive: active,
    };

    console.log("Payload:", payload);

    try {
      await axios.put(`https://localhost:7211/api/departments/${id}`, payload);
      navigate("/department");
    } catch (err) {
      console.error("Error updating department", err);
    }
  };


  return (
    <>
      <SideBar />
      <Header />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Edit Department</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Department Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={title || ""}
                    placeholder="Title"
    
                    
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Department Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={description || ""}
                    placeholder="Description"
    
                    
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="display-block">Department Status</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="product_active"
                      onChange={(e) => setActive(true)}
                      checked={active === true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="product_active"
                    >
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="product_inactive"
                      onChange={() => setActive(false)}
                      checked={active === false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="product_inactive"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">
                    Update Department
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay" data-reff=""></div>
    </>
  );
}
export default EditDepartament;
