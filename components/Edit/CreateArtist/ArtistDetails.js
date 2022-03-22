import Link from "next/link";

export default function ArtistDetails(props) {
  const saveAndContinue = () => {
    props.nextStep();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Add Artist</h5>
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
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="sortname" className="form-label">
                    Sortname
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="sortname"
                      className="form-control"
                      id="sortname"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="disambiguation" className="form-label">
                    Disambiguation
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="disambiguation"
                      className="form-control"
                      id="disambiguation"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="type" className="form-label">
                    Type
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="type"
                      className="form-control"
                      id="type"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="gender"
                      className="form-control"
                      id="gender"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="Area" className="form-label">
                    Area
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="Area"
                      className="form-control"
                      id="Area"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="ipicodes" className="form-label">
                    IPI Codes
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="ipicodes"
                      className="form-control"
                      id="ipicodes"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="isnicodes" className="form-label">
                    ISNI Codes
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="isnicodes"
                      className="form-control"
                      id="isnicodes"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
