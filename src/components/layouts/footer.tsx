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
  console.log(props, "footer props");
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
					<h3>
              {props._site.c_footerMember}
			  </h3>
			  </span>
              <div>
				<div className=" mt-2">
				{props._site.c_footerNavigation.map((res:any)=>{
					return(
						<>
						
						<a href={res.link} > 
							<span className="ml-2">
								{res.label} |
							</span>
						</a>
						
						</>
					)
				})}
				</div>
				<div className="text-white font-sm mt-2 ">
					{props._site.c_footerCopyRight}
				</div>
              
              </div>
            </div>
          </div>

          <div className="link-sec-footer ">
        
						<div className="pt-8 ml-[5rem]">
							<img src={props._site.c_footerEnb.url} alt="EnbLogo" width="120"/>
							<div className="pt-8">
								<span className="text-white font-bold">{props._site.c_corporateAddress}</span>
								
							</div>
							<p className="text-white mt-4 font-bold">Toll Free:
						
                <Link type="button" href={`tel:+18777736605`} className=" btn notHighlight "
              data-ya-track={`viewStore `}
              eventName={`viewStore`}
              rel="noopener noreferrer"
              >
                <span className="teliphone-footer ml-2">(877) 773-6605</span>
              </Link>
							</p>
						</div>
           
           
           
          </div>
          <div className="copyright-bx">
           <div className="mt-[7rem] text-white text-3xl">
			<strong>
							
			{props._site.c_footerCountact}
			</strong>
		   </div>
		   <div className="social-icon flex pt-4 gap-x-4">
			{props._site.c_footerSocial.map((del1:any)=>(
				<>
				<ul><li><a href="#">
				<img src={del1.url} alt="sociallogo" width="35"/></a></li></ul>
				
				
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
