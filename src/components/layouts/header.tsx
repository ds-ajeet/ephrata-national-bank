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
      <header id="header" className="fullwidth clear" aria-label="site header">
        <div id="topbar" className="fullwidth">
          <div className="container clear">
            <nav id="secondary-navigation" aria-label="site contact links">
              <ul id="menu-secondary-navigation" className="menu">
                {props._site?.c_headerCta.map((res: any) => {
                  return (
                    <>
                      <li>
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
              <nav className="h-full headernav flex">
                {props._site?.c_headermenus.cta.map(
                  (del: any, index: number) => {
                    return (
                      <>
                        <div className="navbar">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="p-[20px] text-white"
                              style={{ height: "inherit" }}
                            >
                              {del?.label}
                            </button>
                            <div className="dropdown-content">
                              <div className="rows">
                                <div className="columns">
                                  <div className="text-black pt-8">
                                    {props?._site?.c_headersubMenuOne?.map(
                                      (item: any, indexes: number) => (
                                        <>
                                          {index == indexes ? (
                                            <>
                                              <div className="text-[#004990]  ml-[0.8rem]">
                                                {item.heading}
                                              </div>
                                              {item?.cta?.map((data: any) => (
                                                <>
                                                  <a href="#">{data.label}</a>
                                                </>
                                              ))}
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      )
                                    )}
                                  </div>
                                  <div className="text-black pt-8">
                                    {props?._site?.c_headerSubMenuTwo?.map(
                                      (item: any, indexes: number) => (
                                        <>
                                          {index == indexes ? (
                                            <>
                                              <div className="text-[#004990]  ml-[0.8rem]">
                                                {item.heading}
                                              </div>
                                              {item?.cta?.map((data: any) => (
                                                <>
                                                  <a href="#">{data.label}</a>
                                                </>
                                              ))}
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      )
                                    )}
                                  </div>
                                  <div className="text-black pt-8">
                                    {props?._site?.c_headerSubMenuThree?.map(
                                      (item: any, indexes: number) => (
                                        <>
                                          {index == indexes ? (
                                            <>
                                              <div className="text-[#004990]  ml-[0.8rem]">
                                                {item.heading}
                                              </div>
                                              {item?.cta?.map((data: any) => (
                                                <>
                                                  <a href="#">{data.label}</a>
                                                </>
                                              ))}
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      )
                                    )}
                                  </div>
                                  <div className="text-black pt-8">
                                    {props?._site?.c_headerSubMenuFour?.map(
                                      (item: any, indexes: number) => (
                                        <>
                                          {index == indexes ? (
                                            <>
                                              <div className="text-[#004990]  ml-[0.8rem]">
                                                {item.heading}
                                              </div>
                                              {item?.cta?.map((data: any) => (
                                                <>
                                                  <a href="#">{data.label}</a>
                                                </>
                                              ))}
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
