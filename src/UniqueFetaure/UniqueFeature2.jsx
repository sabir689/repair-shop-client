import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../src/assets/img1.jpg';
import slide2 from '../../src/assets/img2.jpg';
import slide3 from '../../src/assets/img3.jpg';
import slide4 from '../../src/assets/img4.jpg';
import slide5 from '../../src/assets/img5.jpg';





const Category = () => {
    return (
        <section className='p-8 border-2 rounded-2xl '>
            <h1 className='text-5xl m-10 text-center font-extrabold '>Some of our employees are doing their jobs here.</h1>
            

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Car repairing</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">PC fixing</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Tire fixing</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Electronics Work</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">AC repairing</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;