import React from "react";
import "./resume.css";
import ReactToPdf from "react-to-pdf";
import { MyResume } from "../../components";

const ref = React.createRef();

const Resume = () => {
  return (
    <div className="resume">

      <div>
        <ReactToPdf targetRef={ref} filename="resume.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Save a copy of my resume</button>}
        </ReactToPdf>

        <div ref={ref}>
          <MyResume />
        </div>

      </div>

    </div>
  );
};

export default Resume;
