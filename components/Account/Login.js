import Link from "next/link";
import Image from "next/image";

export default function Login(props) {
  return (
    <section
      className={
        "section account " +
        props.theme
      }
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <Image
                src="/assets/img/meb-icons/all_projects.jpg"
                className="card-img-top imz"
                alt="..."
                width={200}
                height={200}
              />
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center">
                    Login to Your Account
                  </h5>
                  <p className="text-center small">
                    Enter your username & password to login
                  </p>
                </div>
                <form className="row needs-validation" noValidate>
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
                        Please enter your username.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="passwword"
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
                        type="checkbox"
                        name="remember"
                        value="true"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">
                      Do not have account?
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
