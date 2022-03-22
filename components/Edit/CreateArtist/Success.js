import Link from "next/link";

export default function Success(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Artist Added!!
                </h5>
                <p className="text-center small">
                  The Artist was added successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
