import Button from "../../Components/Button/Button";
import HomeSec from "../../Components/HomeSec/HomeSec";
import HomeTxt from "../../Components/HomeTxt/HomeTxt";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import homeImg from '../../img/дайсон.jpg'
import homessImg from '../../img/tehnology.jpg'




function Home() {
  return (
    <>
      <div className="Home_sec">
        <div className="container">
          <HomeSec>Техника</HomeSec>
          <div className="Home_buttons flex">
            <Button path="/cart">написать</Button>
            <Button>купить</Button>
          </div>
        </div>
      </div>
      <div className="Home_sec">
        <div className="container">
          <HomeSec>Холодильник</HomeSec>
          <HomeTxt>Нового серебристого цвета</HomeTxt>
          <div className="Home_buttons flex">
            <Button path="/cart">написать</Button>
            <Button>купить</Button>
          </div>
        </div>
      </div>
      <div className="Home_sec">
        <div className="container">
          <HomeSec>dyson</HomeSec>
          <HomeTxt>новый, с большими насадками</HomeTxt>
          <div className="Home_buttons flex">
            <Button path="/cart">написать</Button>
            <Button>купить</Button>
          </div>
        </div>
      </div>
      <div className="Home_slider">
        <Swiper 
          spaceBetween={10} 
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          autoplay={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Link className="Home_slide" to="#">
            <img src={homeImg} alt="" />
              <p className="Home_slide-txt">
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              
              <p className="Home_slide-txt">
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
            <img src={homessImg} alt="" />
              <p className="Home_slide-txt">Lorem ipsum dolor sit amet.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
