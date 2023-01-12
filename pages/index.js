import Layout from "../components/layouts";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <Layout>
      <div className="container flex flex-col min-h-full px-6 mx-auto my-8 space-y-5 max-w-7xl bg-base-100">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full min-h-[350px]"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <p className="text-3xl font-medium text-white">Rekomendasi</p>
        <div className="divider"></div>
        <div className="grid w-full gap-8 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-3 max-h-fit">
          <div className="shadow-xl w-full h-fit max-h-[342px] card hover:scale-110 transition-all duration-300">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <div className="flex flex-col">
                <h2 className="text-white card-title">Shoes!</h2>
                <span className="text-xs text-stone-400">aksesoris</span>
              </div>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-full h-fit max-h-[342px] card">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <h2 className="text-white card-title">Shoes!</h2>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                If a dog chews shoes whose shoes does he choose? tai ta ta ta ta
                uhu huhuh huh
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">Rp. 200.000</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-14 btn btn-primary btn-md">Show more</div>
      </div>
    </Layout>
  );
}
