import * as React from "react";
import gallerybg from "../../images/bg-service.jpg"

const PhotoGallery = (props: any) => {
 


   const photos = props?.photoGallery?.map((element:any) => {
    return (
    <div className="page-content">
      <img src={element.image.url} alt=""/>
     
        <h1>{element.description}</h1>
      
    </div>)
});



  return (
    <>
    
      <div className="space-y-5 container mx-auto">
     {/* <div className="gallery-bg"></div>  */}
        <div className="text-xl font-semibold text-center">
         {/* <h1 className="text-red-eb pt-8"> Photos</h1> */}
          </div>
        <div className="photos-row bg-white">
            {photos}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;