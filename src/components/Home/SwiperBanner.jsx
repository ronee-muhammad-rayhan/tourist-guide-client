// import Swiper core and required modules
import './style.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperBanner() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEO4lUaCqomkaSeBbNH_VV1B7-NC8CmO763gPnkXEw5UhhDaK7wgpnHuARZCgqFHnH0g&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyGcgds836XMgqd-P_JBMpO7A9PbajBMmWk8yVwcXOPNS-ToFJYFwiTyWCgSzCz1hJW0&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YQT541WWPq1OPJuz_GaNvXx9nK6IeE0GA3ZsdZ1C33weMSwDiTPxyuY2-b2-HzrKUVM&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiupPwpI4ngdfPNawsgUvUKpKEZxVNk8vNHv0TQFXV_1b86zPgqwR3oTC-hPzX_WP6UY&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEO4lUaCqomkaSeBbNH_VV1B7-NC8CmO763gPnkXEw5UhhDaK7wgpnHuARZCgqFHnH0g&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyGcgds836XMgqd-P_JBMpO7A9PbajBMmWk8yVwcXOPNS-ToFJYFwiTyWCgSzCz1hJW0&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YQT541WWPq1OPJuz_GaNvXx9nK6IeE0GA3ZsdZ1C33weMSwDiTPxyuY2-b2-HzrKUVM&usqp=CAU" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiupPwpI4ngdfPNawsgUvUKpKEZxVNk8vNHv0TQFXV_1b86zPgqwR3oTC-hPzX_WP6UY&usqp=CAU" alt="" /></SwiperSlide>
        </Swiper>
    );
}