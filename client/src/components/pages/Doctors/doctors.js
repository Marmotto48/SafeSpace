import React from "react";
import DoctorCard from "../Doctors/doctorCard";
import "./doctors.css";

const Doctors = () => {
  return (
    <div className="doc-page">
      <div className="banner">
        <span className="banner-title">
          <span>Meet our </span>
          <h1>Doctors</h1>
        </span>
      </div>
      <div className="article">
        <p>
          Psychiatry is the branch of medicine focused on the diagnosis,
          treatment and prevention of mental, emotional and behavioral
          disorders. A psychiatrist is a medical doctor (an M.D. or D.O.) who
          specializes in mental health, including substance use disorders.
          Psychiatrists are qualified to assess both the mental and physical
          aspects of psychological problems. People seek psychiatric help for
          many reasons. The problems can be sudden, such as a panic attack,
          frightening hallucinations, thoughts of suicide, or hearing "voices."
          Or they may be more long-term, such as feelings of sadness,
          hopelessness, or anxiousness that never seem to lift or problems
          functioning, causing everyday life to feel distorted or out of
          control. Diagnosing Patients Because they are physicians,
          psychiatrists can order or perform a full range of medical laboratory
          and psychological tests which, combined with discussions with
          patients, help provide a picture of a patient's physical and mental
          state. Their education and clinical training equip them to understand
          the complex relationship between emotional and other medical illnesses
          and the relationships with genetics and family history, to evaluate
          medical and psychological data, to make a diagnosis, and to work with
          patients to develop treatment plans.
        </p>
      </div>
      <DoctorCard />
    </div>
  );
};

export default Doctors;
