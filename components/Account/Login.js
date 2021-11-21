import Link from 'next/link'

export default function Login(props) {
    return (
        <section
            className={"section account min-vh-100 d-flex flex-column align-items-center justify-content-center py-4 "+props.theme}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="card mb-3">
                            <img src="assets/img/meb-icons/all_projects.jpg" className="card-img-top imz" alt="..." style={{height: "200px"}}/>
                            <div className="card-body">
                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                    <p className="text-center small">Enter your username & password to login</p>
                                </div>
                                <form className="row g-3 needs-validation" noValidate>
                                    <div className="col-12">
                                        <label htmlFor="yourUsername" className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            <input type="text" name="username" className="form-control" id="yourUsername" required/>
                                            <div className="invalid-feedback">Please enter your username.</div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="yourPassword" className="form-label">Password</label>
                                        <input type="password" name="passwword" className="form-control" id="yourPassword" required/>
                                        <div className="invalid-feedback">Please enter your password!</div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100" type="submit">Login</button>
                                    </div>
                                    <div className="col-12">
                                        <p className="small mb-0">Do not have account?
                                            <Link href="/register">
                                            <a> Create an account</a>
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
