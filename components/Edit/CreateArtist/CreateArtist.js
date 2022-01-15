import React, { useState } from "react";
import ArtistDetails from "./ArtistDetails";
import DatePeriod from "./DatePeriod";
import Others from "./Others";
import Success from "./Success";

export default function CreateArtist(props) {
  const [step, setStep] = useState(1);

  const [artistData, setArtistData] = useState({
    name: "",
    sortname: "",
    disambiguation: "",
    type: "",
    gender: "",
    area: "",
    IPICodes: [],
    ISNICodes: []
  });

  const [datePeriod, setDatePeriod] = useState({
    beganDate: {
      date: "",
      month: "",
      year: ""
    },
    beginArea: "",
    endDate: {
      date: "",
      month: "",
      year: ""
    },
    endArea: ""
  });

  const [othersData, setOthers] = useState({
    relationships: [],
    externalLinks: [],
    editNote: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <section
      className={
        "section account min-vh-100 d-flex flex-column align-items-center justify-content-center py-4 " +
        props.theme
      }
    >
      <div className="testing">
        {{
          1: <ArtistDetails nextStep={nextStep} values={artistData} />,
          2: (
            <DatePeriod
              nextStep={nextStep}
              prevStep={prevStep}
              values={datePeriod}
            />
          ),
          3: (
            <Others
              nextStep={nextStep}
              prevStep={prevStep}
              values={othersData}
            />
          ),
          4: <Success />
        }[step] || <ArtistDetails nextStep={nextStep} values={artistData} />}
      </div>
      <div className="container"></div>
    </section>
  );
}
