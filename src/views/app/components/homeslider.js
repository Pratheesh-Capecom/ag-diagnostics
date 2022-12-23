import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "assets/images/banners/Banner-1.webp";
import Banner2 from "assets/images/banners/Banner-2.webp";
import Banner3 from "assets/images/banners/Banner-3.webp";
import Banner4 from "assets/images/banners/Banner-4.webp";
import Banner1Mobile from "assets/images/banners/Banner-Mobile1.webp";
import Banner2Mobile from "assets/images/banners/Banner-Mobile2.webp";
import Banner3Mobile from "assets/images/banners/Banner-Mobile3.webp";
import Banner4Mobile from "assets/images/banners/Banner-Mobile4.webp";
import { Link } from "react-router-dom";
import { useBanner } from "hooks/homeHooks";


const Homeslider = () => {

  const { data: BannerList } = useBanner();
  const [bannerData, setBannerData] = useState([]);


  console.log(bannerData)
  useEffect(() => {
    if (BannerList) {
      setBannerData(BannerList?.banner)
    }
  }, [BannerList]);

  return (
    <section className="home-slider-bg">
      {/* <Carousel fade className="d-none d-lg-block d-md-block">
        {loading ? <h1>Loading.....</h1> : bannerData === undefined || bannerData === null || bannerData?.length === 0 ? (
          <div>
            <h3 className="no-data">No Data Found</h3>
          </div>
        ) : bannerData?.map((common, a) => (
          <Carousel.Item key={a}>
            <Link to="/packages">
              <img className="d-block w-100 banner-img" src={common?.DesktopImage} alt="" />
            </Link>
          </Carousel.Item>
        ))
        }
      </Carousel>
      <Carousel fade className="d-block d-lg-none d-md-none">
        {loading ? <h1>Loading.....</h1> : bannerData === undefined || bannerData === null || bannerData?.length === 0 ? (
          <div>
            <h3 className="no-data">No Data Found</h3>
          </div>
        ) : bannerData?.map((common, a) => (
          <Carousel.Item key={a}>
            <Link to="/packages">
              <img className="d-block w-100 " src={common?.MobileImage} alt="" />
            </Link>
          </Carousel.Item>
        ))
        }
      </Carousel> */}

      <Carousel fade className="d-none d-lg-block d-md-block">
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100 banner-img" src={Banner1} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner2} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner3} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner4} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>
      <Carousel fade className="d-block d-lg-none d-md-none">
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner1Mobile} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner2Mobile} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner3Mobile} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/packages">
            <img className="d-block w-100" src={Banner4Mobile} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}


export default Homeslider;



