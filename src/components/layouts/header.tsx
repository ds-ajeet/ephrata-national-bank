import * as React from "react";
import FilterSearch from "../locatorPage/FilterSearch";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
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
        
        aria-label="site header"
      >
        <div id="topbar" className="fullwidth">
          <div className="container clear">
            <nav id="secondary-navigation" aria-label="site contact links">
              <ul id="menu-secondary-navigation" className="menu">
                {props._site?.c_headerCta.map((res: any) => {
                  return (
                    <>
                      <li
                        id="menu-item-9688"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-968"
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
                <Link
                  type="button"
                  href={`tel:+18777736605`}
                  className=" btn notHighlight "
                  data-ya-track={`viewStore `}
                  eventName={`viewStore`}
                  rel="noopener noreferrer"
                >
                  <span className="teliphone-footer ml-2">(877) 773-6605</span>
                </Link>
              </ul>{" "}
            </nav>
          </div>
        </div>
        <div className="headermenu">
          <div className="header flex ">
            <div className="headerlogo">
              <img
                src={props._site?.c_headermenus.logo.url}
                alt="logo"
                width="330"
              />
            </div>

            <div className="header-secound menu ">
              <nav className="h-full pt-[2rem]">
                <ul
                  className="flex gap-x-7 h-full"
                  style={{ fontSize: "initial" }}
                >
                  {props._site?.c_headermenus.cta.map(
                    (del: any, index: number) => {
                      return (
                        <>
                          <li className="text-white">
                            <a className="navbar-item" href={del?.link}>
                              <span>{del?.label}</span>
                            </a>
                          </li>
                        </>
                      );
                    }
                  )}
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
