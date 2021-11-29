import React, { useEffect, useState } from "react";
import "./test.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { getPrivatePosts } from "../redux/postSlice";
const Test = () => {
  const [postInfo, setPostInfo] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setPostInfo(e);
  };
  //get all posts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrivatePosts());
  }, [dispatch]);

  return (
    <div className="test">
      <ReactQuill
        theme="snow"
        placeholder="test"
        modules={Test.modules}
        formats={Test.formats}
        onChange={handleChange}
        value={postInfo}
      />
      {/* sectio 2  */}
      <div className="faq">
        <div className="tabs">
          <div className="tab">
            <input className="tabs-input" type="radio" id="rd1" name="rd" />
            <label className="tab-label" htmlFor="rd1">
              1. Anxiety disorders
            </label>
            <div className="tab-content">
              <p>
                Anxiety disorders is a group of mental health disorders that
                includes generalised anxiety disorders, social phobias, specific
                phobias (for example, agoraphobia and claustrophobia), panic
                disorders, obsessive compulsive disorder (OCD) and
                post-traumatic stress disorder. Untreated, anxiety disorders can
                lead to significant impairment on people’s daily lives.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/anxiety-disorders">
                  {" "}
                  Anxiety disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd2" name="rd" />
            <label className="tab-label" htmlFor="rd2">
              2. Behavioural and emotional disorders in children
            </label>
            <div className="tab-content">
              <p>
                Common behaviour disorders in children include oppositional
                defiant disorder (ODD), conduct disorder (CD) and attention
                deficit hyperactivity disorder (ADHD). Treatment for these
                mental health disorders can include therapy, education and
                medication.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/healthyliving/behavioural-disorders-in-children">
                  Behavioural disorders in children
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd4" name="rd" />
            <label className="tab-label" htmlFor="rd4">
              3. Bipolar affective disorder
            </label>
            <div className="tab-content">
              <p>
                Bipolar affective disorder is a type of mood disorder,
                previously referred to as ‘manic depression’. A person with
                bipolar disorder experiences episodes of mania (elation) and
                depression. The person may or may not experience psychotic
                symptoms. The exact cause is unknown, but a genetic
                predisposition has been clearly established. Environmental
                stressors can also trigger episodes of this mental illness.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/bipolar-disorder">
                  Bipolar disorder
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd5" name="rd" />
            <label className="tab-label" htmlFor="rd5">
              4. Depression
            </label>
            <div className="tab-content">
              <p>
                Depression is a mood disorder characterised by lowering of mood,
                loss of interest and enjoyment, and reduced energy. It is not
                just feeling sad. There are different types and symptoms of
                depression. There are varying levels of severity and symptoms
                related to depression. Symptoms of depression can lead to
                increased risk of suicidal thoughts or behaviours.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/depression">
                  Depression
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd6" name="rd" />
            <label className="tab-label" htmlFor="rd6">
              5. Dissociation and dissociative disorders
            </label>
            <div className="tab-content">
              <p>
                Dissociation is a mental process where a person disconnects from
                their thoughts, feelings, memories or sense of identity.
                Dissociative disorders include dissociative amnesia,
                dissociative fugue, depersonalisation disorder and dissociative
                identity disorder.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/dissociation-and-dissociative-disorders">
                  Dissociation and dissociative disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd7" name="rd" />
            <label className="tab-label" htmlFor="rd7">
              6. Eating disorders
            </label>
            <div className="tab-content">
              <p>
                Eating disorders include anorexia, bulimia nervosa and other
                binge eating disorders. Eating disorders affect females and
                males and can have serious psychological and physical
                consequences.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/healthyliving/eating-disorders">
                  Eating disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd8" name="rd" />
            <label className="tab-label" htmlFor="rd8">
              7. Obsessive compulsive disorder (OCD)
            </label>
            <div className="tab-content">
              <p>
                Anxiety disorders is a group of mental health disorders that
                includes generalised anxiety disorders, social phobias, specific
                phobias (for example, agoraphobia and claustrophobia), panic
                disorders, obsessive compulsive disorder (OCD) and
                post-traumatic stress disorder. Untreated, anxiety disorders can
                lead to significant impairment on people’s daily lives.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/obsessive-compulsive-disorder">
                  Obsessive compulsive disorder
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd9" name="rd" />
            <label className="tab-label" htmlFor="rd9">
              8. Paranoia
            </label>
            <div className="tab-content">
              <p>
                Paranoia is the irrational and persistent feeling that people
                are ‘out to get you’. Paranoia may be a symptom of conditions
                including paranoid personality disorder, delusional (paranoid)
                disorder and schizophrenia. Treatment for paranoiainclude
                medications and psychological support.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/paranoia">
                  Paranoia
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd10" name="rd" />
            <label className="tab-label" htmlFor="rd10">
              9. Post-traumatic stress disorder (PTSD)
            </label>
            <div className="tab-content">
              <p>
                Post-traumatic stress disorder (PTSD) is a mental health
                condition that can develop as a response to people who have
                experienced any traumatic event. This can be a car or other
                serious accident, physical or sexual assault, war-related events
                or torture, or natural disasters such as bushfires or floods.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/post-traumatic-stress-disorder-ptsd">
                  Post-traumatic stress disorder
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd11" name="rd" />
            <label className="tab-label" htmlFor="rd11">
              10. Psychosis
            </label>
            <div className="tab-content">
              <p>
                People affected by psychosis can experience delusions,
                hallucinations and confused thinking.. Psychosis can occur in a
                number of mental illnesses, including drug-induced psychosis,
                schizophrenia and mood disorders. Medication and psychological
                support can relieve, or even eliminate, psychotic symptoms.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/psychosis">
                  Psychosis
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd12" name="rd" />
            <label className="tab-label" htmlFor="rd12">
              11. Schizophrenia
            </label>
            <div className="tab-content">
              <p>
                Schizophrenia is a complex psychotic disorder characterised by
                disruptions to thinking and emotions, and a distorted perception
                of reality. Symptoms of schizophrenia vary widely but may
                include hallucinations, delusions, thought disorder, social
                withdrawal, lack of motivation and impaired thinking and memory.
                People with schizophrenia have a high risk of suicide.
                Schizophrenia is not a split personality.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/schizophrenia">
                  Schizophrenia
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd13" name="rd" />
            <label className="tab-label" htmlFor="rd13">
              12. Stress response syndromes (formerly called adjustment
              disorders)
            </label>
            <div className="tab-content">
              <p>
                Stress response syndromes occur when a person develops emotional
                or behavioral symptoms in response to a stressful event or
                situation. The stressors may include natural disasters, such as
                an earthquake or tornado; events or crises, such as a car
                accident or the diagnosis of a major illness; or interpersonal
                problems, such as a divorce, death of a loved one, loss of a
                job, or a problem with substance abuse. Stress response
                syndromes usually begin within three months of the event or
                situation and ends within six months after the stressor stops or
                is eliminated.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.google.com/">Stress response syndromes</a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd14" name="rd" />
            <label className="tab-label" htmlFor="rd14">
              13. Factitious disorders
            </label>
            <div className="tab-content">
              <p>
                Factitious disorders are conditions in which a person knowingly
                and intentionally creates or complains of physical and/or
                emotional symptoms in order to place the individual in the role
                of a patient or a person in need of help.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.google.com/">Factitious disorders</a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd14" name="rd" />
            <label className="tab-label" htmlFor="rd14">
              14. Sexual and gender disorders
            </label>
            <div className="tab-content">
              <p>
                These include disorders that affect sexual desire, performance,
                and behavior. Sexual dysfunction, gender identity disorder, and
                the paraphilias are examples of sexual and gender disorders.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.google.com/">
                  Sexual and gender disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd14" name="rd" />
            <label className="tab-label" htmlFor="rd14">
              15. Somatic symptom disorders
            </label>
            <div className="tab-content">
              <p>
                A person with a somatic symptom disorder, formerly known as a
                psychosomatic disorder or somatoform disorder, experiences
                physical symptoms of an illness or of pain with an excessive and
                disproportionate level of distress, regardless of whether or not
                a doctor can find a medical cause for the symptoms.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.webmd.com/mental-health/somatoform-disorders-symptoms-types-treatment">
                  Somatic symptom disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd14" name="rd" />
            <label className="tab-label" htmlFor="rd14">
              16. Tic disorders
            </label>
            <div className="tab-content">
              <p>
                People with tic disorders make sounds or display nonpurposeful
                body movements that are repeated, quick, sudden, and/or
                uncontrollable. (Sounds that are made involuntarily are called
                vocal tics.) Tourette's syndrome is an example of a tic
                disorder.
                <br />
                <br />
                For more information see:{" "}
                <a href="https://www.webmd.com/brain/tourettes-syndrome">
                  Tic disorders
                </a>
              </p>
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd14" name="rd" />
            <label className="tab-label" htmlFor="rd14">
              1. Anxiety disorders
            </label>
            <div className="tab-content">
              <div className="seperator-2"></div>
            </div>
          </div>

          <div className="tab">
            <input className="tabs-input" type="radio" id="rd3" name="rd" />
            <label htmlFor="rd3" className="tab-close">
              Close others &times;
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
