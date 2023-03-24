import * as React from "react";
import logo from "../../images/mgmlogo.jpg";
import SearchBar from "../locationDetail/search";
import FilterSearch from "../locatorPage/FilterSearch";
import { StaticData } from "../../../sites-global/staticData";
type props = {
  data1: any;
  data: any;
  data2: any;
};
const Header = (props: any) => {
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  return (
    <>
      <header
        id="header"
        className="fullwidth clear"
        role="banner"
        aria-label="site header"
      >
        <div id="topbar" className="fullwidth">
          <div className="container clear">
            <nav id="secondary-navigation" aria-label="site contact links">
              <ul id="menu-secondary-navigation" className="menu">
                {props._site.c_headerCta.map((res: any) => {
                  return (
                    <>
                      <li
                        id="menu-item-9688"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9688"
                      >
                        <a
                          title="Customer Support"
                          aria-label="Customer Support"
                          href={res.link}
                        >
                          <span>{res?.label}</span>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>{" "}
            </nav>
          </div>
        </div>
        <div className="headermenu">
          <div className="header flex ">
            <div className="headerlogo">
              <img src={props._site.c_headermenus.logo.url} alt="logo" width="330"/>
              </div>
           
            <div className="header-secound menu ">
              <nav className="h-full pt-[2rem]">
                <ul className="flex gap-x-7 h-full" style={{fontSize:"initial"}}>
                {props._site.c_headermenus.cta.map((del:any, index:number)=>{
                  return(
                    <>
                    <li className="text-white">
                
                        <a className="navbar-item" href={del?.link}>
                          <span>{del?.label}</span>
                        </a>
                       
                     
                    </li>
                    </>
                  )
                })}
                </ul>
              </nav>

            </div>
            </div>

          </div>

    
       
        
      </header>
      
    </>
  );
};
export default Header;
