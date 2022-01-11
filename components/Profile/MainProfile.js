import React from "react";
import ThemeSwitchButton from "../Utils/ThemeSwitchButton/ThemeSwitchButton";
import Image from 'next/image';

export default function MainProfile(props) {
    return (
        <section className="section profile">
            <div className="row">
                <div className="col-12">

                    <div className="card">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                            <Image src="/assets/img/users/akshat.jpg" alt="Profile" className="rounded-circle" width={400} height={400}/>
                                <h2>Akshat Tiwari</h2>
                                <h3>Junior Software Engineer</h3>
                                <div className="social-links mt-2">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"/></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"/></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"/></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"/></a>
                                </div>
                        </div>
                    </div>

                </div>

                <div className="col-12">

                    <div className="card">
                        <div className="card-body pt-3">
                            <ul className="nav nav-tabs nav-tabs-bordered">

                                <li className="nav-item">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">
                                        Overview
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">
                                        Edit Profile
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">
                                        Settings
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">
                                        Change Password
                                    </button>
                                </li>

                            </ul>
                            <div className="tab-content pt-2">

                                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                    <h5 className="card-title">Bio</h5>
                                    <p className="small fst-italic">
                                        Coding Geek, Open Source Enthusiast.
                                    </p>

                                    <h5 className="card-title">Profile Details</h5>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                        <div className="col-lg-9 col-md-8">Akshat Tiwari</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Company</div>
                                        <div className="col-lg-9 col-md-8">MetaBrainz Foundation Inc.</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Job</div>
                                        <div className="col-lg-9 col-md-8">Junior Software Engineer</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Country</div>
                                        <div className="col-lg-9 col-md-8">India</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Address</div>
                                        <div className="col-lg-9 col-md-8">New Delhi, India</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Phone</div>
                                        <div className="col-lg-9 col-md-8">+91-8178215331</div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 label">Email</div>
                                        <div className="col-lg-9 col-md-8">tiwariakshat03@gmail.com</div>
                                    </div>

                                </div>

                                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                    <form>
                                        <div className="row mb-3">
                                            <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">
                                                Profile Image
                                            </label>
                                            <div className="col-md-8 col-lg-9">
                                                <Image src="/assets/img/users/akshat.jpg" alt="Profile" width={200} height={200}/>
                                                    <div className="pt-2">
                                                        <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image">
                                                            <i className="bi bi-upload"/></a>
                                                        <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image">
                                                            <i className="bi bi-trash"/></a>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">
                                                Full Name
                                            </label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="fullName" type="text" className="form-control" id="fullName" value="Akshat Tiwari"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="about"
                                                   className="col-md-4 col-lg-3 col-form-label">About</label>
                                            <div className="col-md-8 col-lg-9">
                                                <textarea name="about" className="form-control" id="about" style={{height: "100px"}}>
                                                    Coding Geek, Open Source Enthusiast.
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="company"
                                                   className="col-md-4 col-lg-3 col-form-label">Company</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="company" type="text" className="form-control" id="company"
                                                       value="MetaBrainz Foundation Inc."/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="job" type="text" className="form-control" id="Job" value="Junior Software Engineer"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Country"
                                                   className="col-md-4 col-lg-3 col-form-label">Country</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="country" type="text" className="form-control" id="Country"
                                                       value="India"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="address" type="text" className="form-control" id="Address" value="New Delhi, India"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Phone"
                                                   className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="phone" type="text" className="form-control" id="Phone"
                                                       value="+91-8178215331"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Email"
                                                   className="col-md-4 col-lg-3 col-form-label">Email</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="email" type="email" className="form-control" id="Email"
                                                       value="tiwariakshat03@gmail.com"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter
                                                Profile</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="twitter" type="text" className="form-control" id="Twitter"
                                                       value="https://twitter.com/#"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook
                                                Profile</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="facebook" type="text" className="form-control"
                                                       id="Facebook" value="https://facebook.com/#"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram
                                                Profile</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="instagram" type="text" className="form-control"
                                                       id="Instagram" value="https://instagram.com/#"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin
                                                Profile</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="linkedin" type="text" className="form-control"
                                                       id="Linkedin" value="https://linkedin.com/#"/>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade pt-3" id="profile-settings">
                                    <form>

                                        <div className="row mb-3">
                                            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email
                                                Notifications</label>
                                            <div className="col-md-8 col-lg-9">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="changesMade"
                                                           checked/>
                                                        <label className="form-check-label" htmlFor="changesMade">
                                                            Changes made to your account
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="newProducts"
                                                           checked/>
                                                        <label className="form-check-label" htmlFor="newProducts">
                                                            Information on new products and services
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="proOffers"/>
                                                        <label className="form-check-label" htmlFor="proOffers">
                                                            Marketing and promo offers
                                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"
                                                           id="securityNotify" checked disabled/>
                                                        <label className="form-check-label" htmlFor="securityNotify">
                                                            Security alerts
                                                        </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">
                                                Theme
                                            </label>
                                            <div className="col-md-8 col-lg-9">
                                                <ThemeSwitchButton
                                                    dark={props.isDarkThemeActive}
                                                    changeTheme={props.switchActiveTheme}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade pt-3" id="profile-change-password">
                                    <form>

                                        <div className="row mb-3">
                                            <label htmlFor="currentPassword"
                                                   className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="password" type="password" className="form-control"
                                                       id="currentPassword"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New
                                                Password</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="newpassword" type="password" className="form-control"
                                                       id="newPassword"/>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter
                                                New Password</label>
                                            <div className="col-md-8 col-lg-9">
                                                <input name="renewpassword" type="password" className="form-control"
                                                       id="renewPassword"/>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Change Password</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
);
}
