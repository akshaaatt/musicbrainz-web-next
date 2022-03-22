import Link from "next/link";

export default function DatePeriod(props) {
  const saveAndContinue = () => {
    props.nextStep();
  };

  const back = () => {
    props.prevStep();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Date Period
                </h5>
                <p className="text-center small">
                  For more information, check the{" "}
                  <a href="https://musicbrainz.org/doc/Artist">documentation</a>{" "}
                  and{" "}
                  <a href="https://musicbrainz.org/doc/Style/Artist">
                    style guidelines
                  </a>
                  .
                </p>
              </div>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                  <label htmlFor="begindate" className="form-label">
                    Begin Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      name="begindate"
                      className="form-control"
                      id="begindate"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="beginarea" className="form-label">
                    Begin Area
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="beginarea"
                      className="form-control"
                      id="beginarea"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="enddate" className="form-label">
                    End Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      name="enddate"
                      className="form-control"
                      id="enddate"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="endarea" className="form-label">
                    End Area
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="endarea"
                      className="form-control"
                      id="endarea"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-primary w-100"
                    onClick={saveAndContinue}
                  >
                    Next
                  </button>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" onClick={back}>
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
