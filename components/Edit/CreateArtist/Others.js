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
                  More Details
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
                  <label htmlFor="relationships" className="form-label">
                    Add Relationships
                  </label>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      name="relationships"
                      className="form-control"
                      id="relationships"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="externallinks" className="form-label">
                    External Links
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="externallinks"
                      className="form-control"
                      id="externallinks"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="editnote" className="form-label">
                    Edit Note
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="editnote"
                      className="form-control"
                      id="editnote"
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
