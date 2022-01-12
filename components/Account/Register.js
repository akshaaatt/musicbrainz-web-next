import Link from "next/link";
import Image from "next/image";

export default function Register(props) {
  return (
    <section
      className={
        "section account min-vh-100 d-flex flex-column align-items-center justify-content-center py-4 " +
        props.theme
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">
                    Create an Account
                  </h5>
                  <p className="text-center small">
                    Enter your personal details to create account
                  </p>
                </div>

                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-12">
                    <label htmlFor="yourUsername" className="form-label">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span
                        className="input-group-text box-bg"
                        id="inputGroupPrepend"
                      >
                        @
                      </span>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="yourUsername"
                        required
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourEmail" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="yourEmail"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid Email adddress!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="yourPassword"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="yourPassword"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="terms"
                        type="checkbox"
                        value=""
                        id="acceptTerms"
                        required
                      />
                      <label className="form-check-label" htmlFor="acceptTerms">
                        I agree and accept the{" "}
                        <a href="#">Terms and Conditions</a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Create Account
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">
                      Already have an account?
                      <Link href="/login">
                        <a> Log in</a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="card mb-3">
              <Image
                src="/assets/img/meb-icons/all_projects.jpg"
                className="card-img-top imz"
                alt="..."
                width={300}
                height={300}
              />
              <div className="card-body">
                <p className="card-text">
                  <b>
                    Note that any contributions you make to MusicBrainz will be
                    released into the Public Domain and/or licensed under a
                    Creative Commons by-nc-sa license. Furthermore, you give the
                    MetaBrainz Foundation the right to license this data for
                    commercial use.
                  </b>
                  <br />
                  <br />
                  MusicBrainz believes strongly in the privacy of its users! Any
                  personal information you choose to provide will not be sold or
                  shared with anyone else. For full details, please read our
                  Privacy Policy.
                  <br />
                  <br />
                  You may remove your personal information from our services
                  anytime by deleting your account. For more details, see our
                  GDPR compliance statement.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Please read our license page for more details.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
