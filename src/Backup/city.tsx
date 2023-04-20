// import * as React from "react";
// // import Banner from "../components/banner";
// import GetDirection from "../components/commons/GetDirection";
// import constant from "../constant";
// // import { stagingBaseUrl } from "../constants";
// // import bannerImage from "../images/banner.png"
// import "../index.css";
// var currentUrl = "";
// import {
//   Template,
//   GetPath,
//   GetRedirects,
//   TemplateConfig,
//   TemplateProps,
//   TemplateRenderProps,
//   GetHeadConfig,
//   HeadConfig,
// } from "@yext/pages";
// import BreadCrumbs from "../components/layouts/Breadcrumb";
// import Banner from "../components/locationDetail/banner";
// import { StaticData } from "../../sites-global/staticData";
// import { Addresssvg, favicon, mobilesvg, regionNames, stagingBaseurl } from "../../sites-global/global";
// import { JsonLd } from "react-schemaorg";
// import Address from "../components/commons/Address";
// import PageLayout from "../components/layouts/PageLayout";
// import Availability from "../components/locationDetail/Availability";
// import OpenClose from "../components/commons/openClose";
// import timesvg from "../images/watch-icn.svg";
// import { Link } from "@yext/pages/components";
// var currentUrl = "";
// export const config: TemplateConfig = {
//   stream: {
//     $id: "matlan-city",
//     filter: {
//       entityTypes: ["ce_city"],
//       savedFilterIds: ["dm_matalan-stores-directory_address_city"],
//     },
//     fields: [
//       "id",
//       "uid",
//       "meta",
//       "name",
//       "slug",
//       "dm_directoryParents.name",
//       "dm_directoryParents.slug",
//       "dm_directoryParents.meta.entityType",
//       "dm_directoryChildren.name",
//       "dm_directoryChildren.mainPhone",
//       "dm_directoryChildren.c_open_for_shopping",
//       "dm_directoryChildren.c_click_collect_availability",
//       "dm_directoryChildren.slug",
//       "dm_directoryChildren.name",
//       "dm_directoryChildren.id",
//       "dm_directoryChildren.dm_directoryChildrenCount",
//       "dm_directoryChildren.address",
//       "dm_directoryChildren.hours",
//       "dm_directoryChildren.yextDisplayCoordinate"
//     ],
//     localization: {
//       locales: ["en_GB"],
//       primary: false,
//     },
//   },
// };

// export const getPath: GetPath<TemplateProps> = ({ document }) => {
//   var url: any = ""
//   document.dm_directoryParents.map((i: any) => {
//     if (i.meta.entityType.id == 'ce_country') {
//       url = `${i.slug}`
//     }
//     else if (i.meta.entityType.id == 'ce_region') {
//       url = `${url}/${i.slug}/${document.slug.toString()}.html`
//     }
//   })
//   return url;
// };

// export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,
// }): HeadConfig => {
//   var canonical="";
//    document.dm_directoryChildren.map((entity: any) => {
//       canonical=  entity.address.countryCode.toLowerCase().replaceAll(" ", "-") + '/' +  entity.address.region.toLowerCase().replaceAll(" ", "-");
//           })

//   return {
//     title: `${document.c_meta_title?document.c_meta_title:`MGM Stores in ${document.name} | Find a Local Store`}`,
//     charset: "UTF-8",
//     viewport: "width=device-width, initial-scale=1",
//     tags: [
//       {
//         type: "link",
//         attributes: {
//           rel: "shortcut icon",
//           href: favicon,
//         },
//       },
//         {
//           type: "meta",
//           attributes: {
//             name: "description",
//             content:`${document.c_meta_description?document.c_meta_description:`Use this page to find your nearest MGM store in ${document.name} and discover the location details you need to visit us today.`}`,
//           },
//         },

//       //   {
//       //     type: "meta",
//       //     attributes: {
//       //       name: "title",
//       //       content: `${document.c_metaTitle}`,
//       //     },
//       //   },
//         {
//           type: "meta",
//           attributes: {
//             name: "author",
//             content: StaticData.Brandname,
//           },
//         },
//         {
//           type: "meta",
//           attributes: {
//             name: "keywords",
//             content: document.name,
//           },
//         },
//         {
//           type: "meta",
//           attributes: {
//             name: "robots",
//             content: "noindex, nofollow",
//           },
//         },

//         {
//           type: "link",
//           attributes: {
//             rel: "canonical",
//             href: `${
//               stagingBaseurl 
//                  ? stagingBaseurl + canonical + "/"+ document.slug + ".html"
//                  : "/" + document.slug + ".html"
//             }`,
//           },
//         },
//       //   // /og tags

//         {
//           type: "meta",
//           attributes: {
//             property: "og:url",
//             content: `${
//               stagingBaseurl 
//                  ? stagingBaseurl + canonical + "/"+ document.slug + ".html"
//                  : "/" + document.slug + ".html"
//             }`,
//           },
//         },
//         {
//           type: "meta",
//           attributes: {
//             property: "og:description",
//             content: `${document.c_meta_description?document.c_meta_description:`Find MGM Timber Store in ${document.name}. We stock high-quality, robust products at competitive rates.`}`,
//           },
//         },
//         {
//           type: "meta",
//           attributes: {
//             property: "og:title",
//             content: `${document.name}`,
//           },
//         },
//         {
//           type: "meta",
//           attributes: {
//             property: "og:image",
//             content: favicon,
//           },
//         },

//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:card",
//           content: "summary",
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:url",
//           content: `/${document.slug?document.slug:`${document.name.toLowerCase()}`}.html`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:description",
//           content: `${document.c_meta_description?document.c_meta_description:`Find MGM Timber Store in ${document.name}. We stock high-quality, robust products at competitive rates.`}`
//         },
//       },
//     ],
//   };
// };

// const City: Template<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,
// }) => {
//   const {
//     name,
//     dm_directoryParents,
//     dm_directoryChildren,
//     c_globalData,
//     c_canonical,
//     c_metaDescription,
//     c_metaTitle,
//     _site,
//   } = document;
//   var address;
//   var c_companyrn;
//   var c_footerLinks;
//   var c_headerLinks1;
//   var c_phoneNumber;
//   var facebookPageUrl;
//   var instagramHandle;
//   var twitterHandle;
//   var c_tikTok;
//   var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
//     var a = a.name;
//     var b = b.name;
//     return a < b ? -1 : a > b ? 1 : 0;
//   });

//   let slugString = "";
//   document.dm_directoryParents.forEach((e: any) => {
//     slugString += e.slug + "/";
//   });

//   const childrenDivs = dm_directoryChildren.map((entity: any) => {
//     var origin: any = null;
//     if (entity.address.city) {
//       origin = entity.address.city;
//     } else if (entity.address.region) {
//       origin = entity.address.region;
//     } else {
//       origin = entity.address.country;
//     }
//     // let key: any = Object.keys(entity.hours)[0];
//     var url = "";
//     var name: any = entity.name.toLowerCase();
//     var region: any = entity.address.region.toLowerCase();
//     var initialregion: any = region.toString();
//     var finalregion: any = initialregion.replaceAll(" ", "-");
//     var city: any = entity.address.city.toLowerCase();
//     var initialrcity: any = city.toString();
//     var finalcity: any = initialrcity.replaceAll(" ", "-");
//     var string: any = name.toString();;
//     let result: any = string.replaceAll(" ", "-");
//     if (!entity.slug) {
//       url = `/${entity.id}-${result}.html`;
//     } else {
//       url = `/${entity.slug.toString()}.html`;
//     }



//     return (

//       <div className="nearby-card">
//         <div className="location-name-miles icon-row">
//         {/* <div className="icon"> <img className=" " src={mapimage} width="20" height="20"
//                       alt="" /></div> */}
//           <h2><Link className="inline-block notHighlight" href={url}
//            data-ya-track={`viewstore-${entity.name}`}
//            eventName={`viewstore-${entity.name}`}
//            rel="noopener noreferrer"
//           >{entity.name}</Link></h2>
//         </div>
//         <div className="icon-row">
//           <Address address={entity.address} />
//         </div>
//         {entity.mainPhone?
//         <div className="icon-row">
//            {/* <div className="icon">
//            <img className=" " src={Phonesvg} width="20" height="20"
//                         alt="" />
//                         </div> */}
//           <div className="content-col">
//             <a href={`tel:${entity.mainPhone}`}>{entity.mainPhone}</a>
//           </div>
//         </div>:''}
       
//         <div className="icon-row">
//           <div className="content-col open-now-string">
           
//             {typeof entity.hours?.reopenDate!="undefined"?
//             <h6>{StaticData.tempClosed}</h6>
//           :<OpenClose timezone={entity.timezone} hours={entity.hours}/>}
           
//           </div>
//         </div>
//         <div className="icon-row content-col availability-col">

//           <Availability c_openForShoppingAvailibility={entity.c_open_for_shopping}
//            c_clickCollectAvaliability={entity.c_click_collect_availability}
//            c_parking_facilities={entity.c_parking_facilities} c_fitting_rooms={entity.c_fitting_rooms}
//             hours={entity.hours} />
//         </div>



//         <div className="button-bx">
//           <Link className="btn" href={url}
//            data-ya-track={`viewstore-${entity.name}`}
//            eventName={`viewstore-${entity.name}`}
//            rel="noopener noreferrer"
//           >

//             {StaticData.StoreDetailbtn}</Link>
//           <GetDirection buttonText={StaticData.getDirection} address={entity.address} latitude={entity.yextDisplayCoordinate.latitude} longitude={entity.yextDisplayCoordinate.longitude} />
//         </div>
//       </div>
//   );
//   });
//   function getDirectionUrl(entitiy: any) {
//     var origin: any = null;
//     if (entitiy.address.city) {
//       origin = entitiy.address.city;
//     } else if (entitiy.address.region) {
//       origin = entitiy.address.region;
//     } else {
//       origin = entitiy.address.country;
//     }
//     if (navigator.geoentity) {
//       const error = (error: any) => {
//         var message_string =
//           "Unable to determine your entity. please share your entity";
//         // if (confirm(message_string) != true) {
//         //   var getDirectionUrl =
//         //     "https://www.google.com/maps/dir/?api=1&destination=" +
//         //     entitiy.yextDisplayCoordinate.latitude +
//         //     "," +
//         //     entitiy.yextDisplayCoordinate.longitude +
//         //     "&origin=" +
//         //     origin;

//         //   window.open(getDirectionUrl, "_blank");
//         // } else {
//         //   return false;
//         // }
//         var getDirectionUrl =
//           "https://www.google.com/maps/dir/?api=1&destination=" +
//           entitiy.yextDisplayCoordinate.latitude +
//           "," +
//           entitiy.yextDisplayCoordinate.longitude +
//           "&origin=" +
//           origin;

//         window.open(getDirectionUrl, "_blank");
//       };
//       navigator.geoentity.getCurrentPosition(
//         function (position: any) {
//           let currentLatitude = position.coords.latitude;
//           let currentLongitude = position.coords.longitude;
//           let getDirectionUrl =
//             "https://www.google.com/maps/dir/?api=1&destination=" +
//             entitiy.yextDisplayCoordinate.latitude +
//             "," +
//             entitiy.yextDisplayCoordinate.longitude +
//             "&origin=" +
//             currentLatitude +
//             "," +
//             currentLongitude;
//           window.open(getDirectionUrl, "_blank");
//         },
//         error,
//         {
//           timeout: 10000,
//         }
//       );
//     }
//   }
//   c_globalData &&
//     c_globalData.map((i: any) => {
//       address = i.address ? i.address : [];
//       c_companyrn = i.c_companyrn ? i.c_companyrn : "";
//       c_footerLinks = i.c_footerLinks ? i.c_footerLinks : [];
//       c_headerLinks1 = i.c_headerLinks1 ? i.c_headerLinks1 : [];
//       c_phoneNumber = i.phoneNumber ? i.phoneNumber : "";
//       facebookPageUrl = i.facebookPageUrl ? i.facebookPageUrl : "";
//       instagramHandle = i.instagramHandle ? i.instagramHandle : "";
//       twitterHandle = i.twitterHandle ? i.twitterHandle : "";
//       c_tikTok = i.c_tikTok ? i.c_tikTok : "";
//     });

//   var url: any = ""

//   document.dm_directoryParents.map((i: any) => {
//     if (i.meta.entityType.id == 'ce_country') {
//       url = `${i.slug}`
//     }
//     else if (i.meta.entityType.id == 'ce_region') {
//       url = `${url}/${i.slug}/${document.slug.toString()}.html`
//     }
//   })
//   let breadcrumbScheme: any = [];
//   let currentIndex: any = 0;
//   dm_directoryParents &&
//     dm_directoryParents.map((i: any, index: any) => {
//       currentIndex = index;
//       if (index != 0) {
//         breadcrumbScheme.push({
//           "@type": "ListItem",
//           position: index,
//           item: {
//             "@id": `${constant.stagingBaseurl}${i.slug}`,
//             name: i.name,
//           },
//         });
//       }
//     });

//   breadcrumbScheme.push({
//     "@type": "ListItem",
//     position: currentIndex + 1,
//     item: {
//       "@id": `${constant.stagingBaseurl}/${document.slug.toString()}.html`,
//       name: document.name,
//     },
//   });
//   return (
//     <>
//       <JsonLd<Organization>
//         item={{
//           "@context": "https://schema.org",
//           "@type": "Store",
//           name: "Matalan",
//           //   url: _site.c_canonical,
//           // logo: `${document.c_ogImage ? document.c_ogImage.map((result:any)=>{return result.url}) : ""}`
//         }}
//       />
//       <JsonLd<BreadcrumbList>
//         item={{
//           "@context": "https://schema.org",
//           "@type": "BreadcrumbList",

//           itemListElement: breadcrumbScheme,
//         }}
//       />
//       <PageLayout global={_site}>
//         <BreadCrumbs
//           name={name}
//           address={address}
//           parents={dm_directoryParents}
//           baseUrl={relativePrefixToRoot}
//         ></BreadCrumbs>

//         <div className="content-list city-page">
//           <div className="container mx-auto">
//             <div className="sec-title">
//               <h2>
//               MGM stores in {name}
//               </h2>
//             </div>
//             <div className="flex flex-wrap justify-center items-start -mx-2.5 lg:-mx-[.9375rem]">
//               {childrenDivs}
//             </div>
//           </div>
//         </div>
//       </PageLayout>
//     </>
//   );
// };
// export default City;




import * as React from "react";
import logo from "../../images/mgmlogo.jpg";
import SearchBar from "../locationDetail/search";
import FilterSearch from "../locatorPage/FilterSearch";
import { StaticData } from "../../../sites-global/staticData";

const Header = (props: any) => {
  // console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
  // const linkDoms = props?._site?.c_headerLinks?.map((link: any) => (
  //   <a
  //     className="navbar-item"
  //     href="#"
  //   >
  //     <span style={{ fontWeight: "bold" }}>{link.label}</span>
  //   </a>
  // ));

  const Headercountact = props?._site?.c_headerMenus?.map((link: any) => (
    <div className="flex">
      <img src={link.headermenu.url} width="30" alt="" />
      <a
        className="navbar-item"
        href={link?.headermenus?.link}
        style={{ marginTop: "5px" }}
      >
        <span style={{ marginLeft: "10px", marginRight: "20px" }}>
          {link?.headermenus?.label}
        </span>
      </a>
    </div>
  ));

  return (
    <>
      <div
        style={{ height: "27px", width: "400px", marginLeft: "902px" }}
        className="flex"
      >
        <a href="#" className="pt-2">
          <h4 style={{ fontWeight: "bold", fontSize: "17px" }}>
            {props._site.c_trustpilot.label}
          </h4>
        </a>

        <a href="#" className="ml-2 pt-2">
          <img src={props._site.c_trustpilot.link} width="160" alt="" />
        </a>

        <a href="#" className="ml-2 pt-2">
          <img src={props._site.c_trust.url} width="130" alt="logo" />{" "}
        </a>

        <span className="pt-2 ml-6">{StaticData.Vat}</span>
        <span className="pt-2 font-bold ml-2">{StaticData.Inc}</span>

        <label className="switch ml-4 pt-2">
          <input type="checkbox" />
          <span className="slide round"></span>
        </label>

        <span className="pt-2 ml-4">{StaticData.Ex}</span>
      </div>

      <div
        style={{ background: "white", height: "68px" }}
        id="header"
        className="header-nav"
      >
        <div
          style={{ marginLeft: "25px" }}
          className="container header-content flex items-center justify-between"
        >
          <div className="logo w-auto">
            {/* <img src={props._site.c_trust.url} width="90" alt="logo" style={{marginLeft:"10s00px"}}/>  */}
            <a href="#">
              <img
                src={props._site.c_mgmTimberLogo.url}
                width="150"
                alt="logo"
              />
            </a>
          </div>

          <div>
            <SearchBar />
          </div>
          <div className="flex items-center font-bold text-sm">
            {Headercountact}
          </div>
        </div>
        <div className="header-content-right lg:hidden">
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className="">
        <div
          style={{ background: "#02a6db", height: "70px", fontSize: "initial" }}
          className="text-black w-full font-bold"
        >
          <div className="flex gap-x-6 text-ml headerLink">
            {props?._site?.c_headerLinks?.map((link: any, index: number) => (
              <div className="navbar-item">
                {/* <a>this is pert of aker tag</a> */}
                {/* <span style={{ fontWeight: "bold" }}></span> */}
                <div className="navbar">
                  <div className="dropdown">
                    <button className="dropbtn" style={{ height: "70px" }}>
                      {link.label}
                    </button>
                    <div className="dropdown-content">
                      <div className="rows">
                        <div className="columns">
                          <div className="text-black">
                            {props?._site?.c_submenu?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
                          <div className="text-black">
                            {props?._site?.c_submenutwo?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
                          <div className="text-black">
                            {props?._site?.c_submenuthree?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
                          <div className="text-black">
                            {props?._site?.c_submenufour?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
                          <div className="text-black">
                            {props?._site?.c_submenufive?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
                          <div className="text-black">
                            {props?._site?.c_submenussix?.map(
                              (item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <div className="">{item.heading}</div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
