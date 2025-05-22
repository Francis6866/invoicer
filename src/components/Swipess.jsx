import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import TestimonialCard from './TestimonialCard'
import chioma from '../assets/images/test-chioma.jpg'
import musa from '../assets/images/test-musa.jpg'
import tailor1 from '../assets/images/tailor.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default () => {
  return (
        <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
            >
              {/* <div className='flex flex-col lg:flex-row justify-center items-center gap-10'> */}
              <SwiperSlide>
                <TestimonialCard
                      text="Before Invoicer, I used to forget what I sold by evening. Now, everything is recorded — even my staff use it with ease. It's like having a full-time manager in my pocket"
                      name="Chioma Eze"
                      position="Owner of Chi-Chi Cosmetics, Aba"
                      img={chioma}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                      text="I sell both wholesale and retail. Invoicer helps me know what's remaining, what's moving, and how much I've made in a day. I no longer need my notebook and calculator."
                      name="Ibrahim Musa"
                      position="Provisions Merchant, Kaduna"
                      img={musa}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard 
                    text="Invoicer has changed how I run my tailoring shop. I now send invoices, track payments, and manage orders easily. It keeps me organized and saves me time every single day."
                    name="Grace Okonkwo"
                    position="Tailor & Fashion Designer, Enugu"
                    img={tailor1}
                />
              </SwiperSlide>
              {/* </div> */}
            </Swiper>
  );
};