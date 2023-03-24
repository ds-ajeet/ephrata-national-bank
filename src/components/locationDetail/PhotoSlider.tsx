// import * as React from "react";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// const PhotoSlider = (props: any) => {
//   const { photoGallery, height, width } = props;  
//   const photos = photoGallery.map((element:any) => (   

// 	<SplideSlide>
//     <img height={height} width={width} src={element.url} />
// 	</SplideSlide>    
//   ));
//   return (
//     <>
// 	  <Splide aria-label="Photo Slider">
//           {photos}
//       </Splide>
//     </>
//   );
// };

// export default PhotoSlider;





import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {

const options = {
  type:"loop",
  autoplay :true,
  PauseOnHover:true,
}


  const { photoGallery, c_bannerLink } = props;
  const photos =props._site?.photoGallery?.map((element: any) => (

    <SplideSlide>
      <div className="slider" id="banner">

        <img src={element.image.url} alt="photoGallery" />

        <div className="slide-content">
          <h2>{element.description}</h2>
          <p>{element.details}</p>
     
            <a className="btn style-outline-white" href="#">{props._site.c_bannerLink.label}</a>
     
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <>

      <Splide aria-label="Photo Slider" options={options}>


        {photos}
      </Splide>

    </>
  );
};

export default PhotoSlider;