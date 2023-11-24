// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SwiperBanner from '../../components/Home/SwiperBanner';

const Home = () => {
    return (
        <div>
            <Swiper id='swiper-banner'
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7t-dw6vJFJ_UBmHqUuIdIcKzvhrn4yVFmYaXaM8TuRdJBoQxihy6mwF8IeuiMQvcmC0&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfd01lFB6cnk316go8YEApduBowwqZQBZU8Fm18ldqe1fihQf8sdT3KYaoibNWQcmYFk&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTaKnWUrcdEcH82G7aqcNT0XOLqyfxcNXBfBiGAnWQ-z64hTRUcMwVJlqsrVMr0U9-8I&usqp=CAU" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WB_lqgm4RBmY-aGhPIwVQG51tiA0FtuPsTNVaP_S0_ffVkTUn_bqbUuDfffJOm_vKwI&usqp=CAU" alt="" /></SwiperSlide>
            </Swiper>
            <SwiperBanner></SwiperBanner>
        </div>
    );
};

export default Home;