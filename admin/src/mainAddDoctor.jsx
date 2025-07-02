
import "./js/jquery-3.2.1.min.js"
import "./js/jquery.slimscroll.js"
import "./js/select2.min.js"
import "./js/app.js"

// import "./js/bootstrap.min.js"
// import "./js/moment.min.js"
// import "./js/bootstrap-datetimepicker.min.js"
 
import doctor1 from "./img/doctor-thumb-03.jpg";
import doctor2 from "./img/doctor-thumb-04.jpg";

 import user from "./img/user.jpg";
import React,{useState} from "react"
function MainAddDoctor() {


    const list=[{
        id:1,
        FirstName:"Cristina",
        LastName:"Groves",
        Departament:"Gynecologist",
        photo:doctor1
    },{
        id:2,
        FirstName:"Henry ",
        LastName:"Wells",
        Departament:"Psychiatrist",
        photo:doctor2

}]

const[lists,setlists]=useState();
    return(

        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <h4 className="page-title">Add Doctor</h4>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Department <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email"/>
                                    </div>
                                </div>
                           
                               
								<div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                            <input type="text" className="form-control datetimepicker"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
									<div className="form-group gender-select">
										<label className="gen-label">Gender:</label>
										<div className="form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="gender" className="form-check-input"/>Male
											</label>
										</div>
										<div className="form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="gender" className="form-check-input"/>Female
											</label>
										</div>
									</div>
                                </div>
								<div className="col-sm-12">
									<div className="row">
									</div>
								</div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
									<div className="form-group">
										<label>Avatar</label>
										<div className="profile-upload">
											<div className="upload-img">
												<img alt="" src={user}/>
											</div>
											<div className="upload-input">
												<input type="file" className="form-control"/>
											</div>
										</div>
									</div>
                                </div>
                            </div>
						
                            <div className="form-group">
                                <label className="display-block">Status</label>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="doctor_active" value="option1" checked/>
									<label className="form-check-label" htmlFor="doctor_active">
									Active
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="doctor_inactive" value="option2"/>
									<label className="form-check-label" htmlFor="doctor_inactive">
									Inactive
									</label>
								</div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Doctor</button>
                            </div>
                        </form>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-author"> Tarah Shropshire </span>
                                            <span className="message-time">12:28 AM</span>
                                            <div className="clearfix"></div>
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-author"> Catherine Manseau </span>
                                            <span className="message-time">12:28 AM</span>
                                            <div className="clearfix"></div>
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-author"> Domenic Houston </span>
                                            <span className="message-time">12:28 AM</span>
                                            <div className="clearfix"></div>
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
    
    )
}
export default MainAddDoctor