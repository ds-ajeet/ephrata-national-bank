import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText
  } = props;
  return (
    <>
     <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>

      <div className="address-main-sec pt-8">
      <div className="text-[#004990] ml-8 pt-4 font-bold text-xl">
                        <Model
                  name={StaticData.Holdiay}
                  holidayHours={hours?.holidayHours}
                />
                </div>
        {/* <h4 className="box-title">{c_storeInfoHeading?c_storeInfoHeading:"Store Details"}</h4> */}

        <div className="icon-rows content-col flex">
          <div className="icon">
            {" "}
            <img className=" " src={mapimage} width="20" height="20" alt="mapimage" />
          </div>
          <div className="  address-text notHighlight ml-4">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>{address.city}
            <span className="ml-2">{address.region}</span>
            <span className="ml-2">{address.postalCode}</span></div>
            
          </div>
        </div>

        {phone ? (
          <div className="icon-rows flex mt-2">
            <div className="icon">
              {" "}
              
              <img className=" " src={Phonesvg} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col ml-4">
           
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}

        <ul className="">
          <li className="button-bx direction-button">
            <GetDirection
              buttonText={c_getDirectionsCTAText?c_getDirectionsCTAText:StaticData.getDirection}
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul>

       

      </div>
{/* 
      {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title">{"Store Opening Hours"}</h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}
              {hours && (
                <Hours
                  title={"Store Opening Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
};

export default Contact;
