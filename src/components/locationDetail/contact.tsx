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
import { formatPhoneNumber } from "react-phone-number-input";

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
    c_getDirectionsCTAText,
  } = props;
  return (
    <>
      <div className="map-sec">
        <CustomMap prop={yextDisplayCoordinate} />
      </div>

      <div className="address-main-sec pt-8">
        <div className="text-[#004990] pt-4 font-bold text-xl">
          <Model name={StaticData.Holdiay} holidayHours={hours?.holidayHours} />
        </div>
        {/* <h4 className="box-title">{c_storeInfoHeading?c_storeInfoHeading:"Store Details"}</h4> */}

        <div className="icon-rows content-col flex pt-4">
          <div className="icon">
            {" "}
            <img
              className=" "
              src={mapimage}
              width="20"
              height="20"
              alt="mapimage"
            />
          </div>
          <div className="  address-text notHighlight ml-4">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>
              {address.city}
              <span className="ml-2">{address.region}</span>
              <span className="ml-2">{address.postalCode}</span>
            </div>
          </div>
        </div>
        {phone ? (
          <div className="icon-rows flex mt-2">
            <div className="icon">
              {" "}
              <img
                className=" "
                src={Phonesvg}
                width="22"
                height="22"
                alt="phonesvg"
              />
            </div>
            <div className="content-col ml-4">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {/* phone formating in (789) 987-7887 */}
                {formatPhoneNumber(phone)}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}

        <ul className="">
          <li className="button-bx direction-button">
            {/* direction to the google map  */}
            <GetDirection
              buttonText={
                c_getDirectionsCTAText
                  ? c_getDirectionsCTAText
                  : StaticData.getDirection
              }
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
