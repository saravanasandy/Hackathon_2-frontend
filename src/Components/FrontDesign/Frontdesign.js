
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import './Frontdesign.css';

const Frontdesign = () => {
  return (
    <div>

<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-green-earth-energy-saving-and-emission-reduction-image_2248373.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.astralenergyllc.com/wdpr/wp-content/uploads/2019/03/Flick-the-Switch-5-Essential-Facts-About-Turning-Off-Your-Lights-to-Save-Energy.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwk01IosZXdCv4KDJSuivAMUywy89UVUQuQ&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKSvy1A33vSzd35138EfTNNjKrpI9vU0Kug8UXfsV_fd2rj5j0FnguThGI5Q8Wd8oUYU&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://png.pngtree.com/png-clipart/20210116/ourmid/pngtree-3d-cooperation-stonk-income-iconic-chat-png-image_2751378.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOwLjTqo8An7k8IP61I5ld76rIlorgZy5rFZPkUnXUN6jvRSlLpxwSGvVAkTf1aBmoPw&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPbK3r-IIKB2G6cYpFyVVz00c0J6J5ptK1Ix2RHKzfiTPT57xlufVfom8OnEh5oY9cPw&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVUBL9McT4KJ0Ajch-7ciw_1XXW_1w6Ey6g&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdD-1apz-zB7xt7rimZafJQoitY6_XQCukQ&usqp=CAU" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Frontdesign




