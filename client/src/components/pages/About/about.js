import React from "react";
import { DemoCarousel } from "../Doctors/docCarousel";
import "./about.css";
import about from "./about.png";
import { RiMentalHealthLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiDoctorFace } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About us</title>
        <meta
          name="description"
          content="All you need to know about Safe Space"
          description="og:title" 
        />
        <meta charSet="utf-8" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="banner">
        <span className="banner-title">
          <span>All you need to know</span>
          <h1>about us</h1>
        </span>
      </div>
      <div className="box-container2">
        <div className="card-service ">
          <div className="inside-service-card blue-circle ">
            <BsFillChatDotsFill />
          </div>

          <span>Chat with a doctor</span>
        </div>
        <div className="card-service">
          <div className="inside-service-card green-circle">
            <RiMentalHealthLine />
          </div>
          <span>Protect Yourself</span>
        </div>
        <div className="card-service">
          <div className="inside-service-card pink-circle">
            <GiDoctorFace />
          </div>
          <span>Professionals</span>
        </div>
      </div>
      <div className="about-section1">
        <h1>Welcome to Safe Space</h1>
        <div className="about-text">
          <p>
            Psychiatry is the medical specialty devoted to the diagnosis,
            prevention, and treatment of mental disorders.These include various
            maladaptations related to mood, behaviour, cognition, and
            perceptions. See glossary of psychiatry. Initial psychiatric
            assessment of a person typically begins with a case history and
            mental status examination. Physical examinations and psychological
            tests may be conducted. On occasion, neuroimaging or other
            neurophysiological techniques are used. Mental disorders are often
            diagnosed in accordance with clinical concepts listed in diagnostic
            manuals such as the International Classification of Diseases (ICD),
            edited and used by the World Health Organization (WHO) and the
            widely used Diagnostic and Statistical Manual of Mental Disorders
            (DSM), published by the American Psychiatric Association (APA). The
            fifth edition of the DSM (DSM-5) was published in May 2013 which
            re-organized the larger categories of various diseases and expanded
            upon the previous edition to include information/insights that are
            consistent with current research.
          </p>
          <p>
            <img id="img1-about" src={about} alt="" />
            Combined treatment with psychiatric medication and psychotherapy has
            become the most common mode of psychiatric treatment in current
            practice, but contemporary practice also includes a wide variety of
            other modalities, e.g., assertive community treatment, community
            reinforcement, and supported employment. Treatment may be delivered
            on an inpatient or outpatient basis, depending on the severity of
            functional impairment or on other aspects of the disorder in
            question. An inpatient may be treated in a psychiatric hospital.
            Research within psychiatry as a whole is conducted on an
            interdisciplinary basis with other professionals, such as
            epidemiologists, nurses, social workers, occupational therapists, or
            clinical psychologists.
          </p>
          <p>
            Psychiatry refers to a field of medicine focused specifically on the
            mind, aiming to study, prevent, and treat mental disorders in
            humans. It has been described as an intermediary between the world
            from a social context and the world from the perspective of those
            who are mentally ill. People who specialize in psychiatry often
            differ from most other mental health professionals and physicians in
            that they must be familiar with both the social and biological
            sciences. The discipline studies the operations of different organs
            and body systems as classified by the patient's subjective
            experiences and the objective physiology of the patient. Psychiatry
            treats mental disorders, which are conventionally divided into three
            very general categories: mental illnesses, severe learning
            disabilities, and personality disorders. While the focus of
            psychiatry has changed little over time, the diagnostic and
            treatment processes have evolved dramatically and continue to do so.
            Since the late 20th century, the field of psychiatry has continued
            to become more biological and less conceptually isolated from other
            medical fields.
          </p>
          <img
            id="img2-about"
            src="https://khn.org/wp-content/uploads/sites/2/2021/08/mental-health.png?resize=1270,847"
            alt=""
          />
        </div>
      </div>
      <div className="about-section2">
        <h1>Our Doctors</h1>
        <div className="carousel">
          <DemoCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
