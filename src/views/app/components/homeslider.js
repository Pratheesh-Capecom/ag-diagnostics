import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useBanner } from "hooks/home";
import Loader from "./loader";

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
        {loading ? <div className="txt-center"><Loader /></div> : bannerData === undefined || bannerData === null || bannerData?.length === 0 ? (
          <div className="txt-center">
            <h3 className="no-data">No Data Found</h3>
          </div>
        ) : bannerData?.map((common, a) => (
          <Carousel.Item key={a}>
            <a href={common?.Url} rel="noreferrer">
              <img className="d-block w-100 banner-img" src={common?.DesktopImage} alt="" />
            </a>
          </Carousel.Item>
        ))
        }
      </Carousel>
      <Carousel fade className="d-block d-lg-none d-md-none">
        {loading ? <div className="txt-center"><Loader /></div> : bannerData === undefined || bannerData === null || bannerData?.length === 0 ? (
          <div className="txt-center">
            <h3 className="no-data">No Data Found</h3>
          </div>
        ) : bannerData?.map((common, a) => (
          <Carousel.Item key={a}>
            <a href={common?.Url} rel="noreferrer">
              <img className="d-block w-100 " src={common?.MobileImage} alt="" />
            </a>
          </Carousel.Item>
        ))
        }
      </Carousel>
    </section>
  );
}


export default Homeslider;



