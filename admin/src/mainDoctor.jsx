// //script

import "./js/jquery-3.2.1.min.js";
import "./js/jquery.slimscroll.js";
import "./js/select2.min.js";
import "./js/app.js";
// import "./js/Chart.bundle.js";
import "./js/tagsinput.js";
// import "./js/chart.js";

import { Link } from "react-router-dom";

import doctor1 from "./img/doctor-thumb-03.jpg";
import doctor2 from "./img/doctor-thumb-04.jpg";
import doctor3 from "./img/doctor-thumb-11.jpg";
import doctor4 from "./img/doctor-thumb-12.jpg";

import doctor5 from "./img/doctor-thumb-09.jpg";
import doctor7 from "./img/doctor-thumb-02.jpg";
import doctor8 from "./img/doctor-thumb-05.jpg";
import doctor9 from "./img/doctor-thumb-06.jpg";

import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditDoctor from "./editDoctor.jsx";

console.log(typeof $().dropdown);

function MainDoctor() {
  let empdata=[
    {
      id:1,
      firstName:"Henry",
      lastName:"Daniels",
      specialization :"Cardiologist"

    }
  ]
  let [doctors, setdoctors] = useState([]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Doctors</h4>
            </div>

            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-doctor"
                className="btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Doctor
              </Link>
            </div>
          </div>
          <div className="row doctor-grid">
            <div className="col-md-4 col-sm-4  col-lg-3">
              {/* <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor1} />
                  </a>
                </div>
                
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Cristina Groves</a>
                </h4>
                <div className="doc-prof">Gynecologist</div>
               
              </div> */}
            </div>

            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor5} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Marie Wells</a>
                </h4>
                <div className="doc-prof">Psychiatrist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor2} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">

                    <Link
                      to="/edit-doctor"
                      className="dropdown-item"
                    >
                     <i className="fa fa-pencil m-r-5"></i> Edit
                    </Link>

                    {/* <a className="dropdown-item">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a> */}

                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Henryyyy Daniels</a>
                </h4>
                <div className="doc-prof">Cardiologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor3} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Mark Hunter</a>
                </h4>
                <div className="doc-prof">Urologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="#">
                    <img alt="" src={doctor4} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Michael Sullivan</a>
                </h4>
                <div className="doc-prof">Ophthalmologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor2} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Linda Barrett</a>
                </h4>
                <div className="doc-prof">Dentist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor5} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Ronald Jacobs</a>
                </h4>
                <div className="doc-prof">Oncologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor7} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Albert Sandoval</a>
                </h4>
                <div className="doc-prof">Neurologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor8} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Diana Bailey</a>
                </h4>
                <div className="doc-prof">General Surgery</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor9} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Shirley Willis</a>
                </h4>
                <div className="doc-prof">Radiologist</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor3} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Pamela Curtis</a>
                </h4>
                <div className="doc-prof">Pediatrics</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="profile.html">
                    <img alt="" src={doctor4} />
                  </a>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-doctor.html">
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_doctor"
                    >
                      <i className="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 className="doctor-name text-ellipsis">
                  <a href="profile.html">Justin Parker</a>
                </h4>
                <div className="doc-prof">Physical Therapist</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="see-all">
                <a className="see-all-btn" href="javascript:void(0);">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">D</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Domenic Houston{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">B</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Buster Wigton </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Rolland Webber </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Claire Mapes </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Melita Faucher</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Jeffery Lalor</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">L</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Loren Gatlin</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Tarah Shropshire</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay" data-reff=""></div>
    </>
  );
}
export default MainDoctor;
