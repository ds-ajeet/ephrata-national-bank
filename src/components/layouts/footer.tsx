import * as React from "react";
import "../../index.css";
import logofooter from "../../images/equal-housing-lender.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global";
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
// import Link from "../commons/Link";
import { Link } from "@yext/pages/components";

const Footer = (props: any) => {
  // const [isNavVisible, setNavVisibility] =  useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  return (
    <>
      <footer className="inline-block w-full site-footer bg-[#004990] ">
        <div className="container mb-[7rem]">
          <div className="store-locator">
            <div className="company-logo ">
              <img src={logofooter} alt="logo" style={{ height: "70px" }} />
            </div>

            <div className="store-inner flex flex-raw mt-8 text-white">
              <span>
               {props._site?.c_footerMember}
              </span>
              <div>
                <div className=" mt-2">
                  {props._site?.c_footerNavigation?.map((res: any) => {
                    return (
                      <>
                        <a href={res.link}>
                          <span className="footerCta-privacy">
                            {res.label} |
                          </span>
                        </a>
                      </>
                    );
                  })}
                </div>
                <div className="text-white font-sm mt-2 ">
                  {props._site?.c_footerCopyRight}
                </div>
              </div>
            </div>
          </div>

          <div className="link-sec-footer ">
            <div className="pt-8 ml-[6rem] ">
              <img
                src={props._site?.c_footerEnb.url}
                alt="EnbLogo"
                width="120"
              />
            </div>
            <div className="pt-6 ml-[7rem] text-white font-sm">
              <span>{props._site?.c_corporateOffice.office}</span>
            </div>
            <div className="pt-4 text-white font-sm text-lg pl-[2rem]">
              <span>{props._site?.c_corporateOffice.address}</span>
            </div>

            <p className="text-white mt-4 font-bold pl-[4rem]">
              Toll Free:
              <Link
                href={`tel:+18777736605`}
                className=" btn notHighlight "
                data-ya-track={`viewStore `}
                eventName={`viewStore`}
                rel="noopener noreferrer"
              >
                <span className="ml-2">(877) 773-6605</span>
              </Link>
            </p>
          </div>
          <div className="copyright-bx">
            <div className="mt-[7rem] text-white text-3xl">
              <strong>{props._site?.c_footerCountact}</strong>
            </div>
            <div className="social-icon flex pt-4 gap-x-4">
              {props._site?.c_footerSocial?.map((del1: any) => (
                <>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={del1.url} alt="sociallogo" width="55" />
                      </a>
                    </li>
                  </ul>
                </>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent
        buttonText={"Accept"}
        buttonStyle={{
          marginLeft: "100px",
        }}
      >
        <p>
          {cookieText}
          <a className="text-cookies-link" href={cookiesUrl}>
            {StaticData.cookie}
          </a>
          .
        </p>
      </CookieConsent>
    </>
  );
};

export default Footer;
function handleMediaQueryChange(mediaQuery: MediaQueryList) {
  throw new Error("Function not implemented.");
}
