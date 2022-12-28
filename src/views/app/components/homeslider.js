import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useBanner } from "hooks/home";


const Homeslider = () => {

  const { data: BannerList, isLoading: loading } = useBanner();
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    if (BannerList) {
      setBannerData(BannerList?.banner)
    }
  }, [BannerList]);

  return (
    <section className="home-slider-bg">
      <Carousel fade className={bannerData === undefined || bannerData === null || bannerData?.length === 0 ? ' d-none d-lg-block d-md-block empty-pack' : 'd-none d-lg-block d-md-block'}>
        {loading ? <h1> Loading.... </h1> : bannerData === undefined || bannerData === null || bannerData?.length === 0 ? (
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
      </Carousel>
    </section>
  );
}


export default Homeslider;



