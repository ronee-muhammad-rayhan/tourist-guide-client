// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SwiperBanner from '../../components/Home/SwiperBanner';
import TourismTravelGuide from '../../components/Home/TourismTravelGuide';
import { Helmet } from 'react-helmet-async';
import TourType from '../../components/Home/TourType';
import TouristStory from '../../components/Home/TouristStory';
import CallToAction from '../../components/Home/CallToAction';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
// AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tourists Guide | Home</title>
            </Helmet>
            {/* Banner/Slider Section */}
            <section className='pb-12' data-aos="fade-up">
                <Swiper id='swiper-banner'
                    spaceBetween={50}
                    slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7t-dw6vJFJ_UBmHqUuIdIcKzvhrn4yVFmYaXaM8TuRdJBoQxihy6mwF8IeuiMQvcmC0&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfd01lFB6cnk316go8YEApduBowwqZQBZU8Fm18ldqe1fihQf8sdT3KYaoibNWQcmYFk&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTaKnWUrcdEcH82G7aqcNT0XOLqyfxcNXBfBiGAnWQ-z64hTRUcMwVJlqsrVMr0U9-8I&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WB_lqgm4RBmY-aGhPIwVQG51tiA0FtuPsTNVaP_S0_ffVkTUn_bqbUuDfffJOm_vKwI&usqp=CAU" alt="" /></SwiperSlide>
                </Swiper>
                <SwiperBanner></SwiperBanner>
            </section>

            {/* Tourism and Travel Guide Section */}
            <section className='py-12' data-aos="zoom-in-right">
                <TourismTravelGuide />
            </section>

            {/* Tour Type Section */}
            <section className='py-12' data-aos="zoom-in-up">
                <TourType />
            </section>

            {/* Tourist Story Section: */}
            <section className='py-12' data-aos="flip-up">
                <TouristStory />
            </section>

            {/* CallToAction Section: */}
            <section className='py-12' data-aos="zoom-in-up">
                <CallToAction />
            </section>
        </div>
    );
};

export default Home;