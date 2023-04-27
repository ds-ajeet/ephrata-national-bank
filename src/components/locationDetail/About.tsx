import { Link } from "@yext/pages/components";
import * as React from "react";
import RtfConverter from "@yext/rtf-converter";

export default function About(props: any) {
  function convertToRtf(rtf: any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(
      /\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,
      ""
    );
    rtf = rtf.replace("/", "");
    rtf = rtf.replace(";", "");
    rtf = rtf.replace("-", "");
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }
  return (
    <>
      <div className="about-sec ">
        <div className="container-custom">
          <div className="about-inner-sec flex">
            <div className="about-content ">
              <strong className="location-established">
                {props.c_about.labelYear}
              </strong>
              <div className="pt-2">
                <h2 className="location-established">
                  {props.c_about.heading}
                </h2>
              </div>
              <div className="mt-8 ml-8 about-discription">
                <p>{props.c_about.description}</p>
                <p>{props.c_about.descriptionTwo}</p>
                <p>{props.c_about.descriptionthree}</p>
                <p>{props.c_about.descriptionFour}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
