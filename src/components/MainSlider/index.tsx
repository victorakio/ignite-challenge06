import { chakra } from "@chakra-ui/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

const ChakraSwiper = chakra(Swiper);
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export function MainSlider() {
  return (
    <>
      <ChakraSwiper
        width={["100%", "100%", "100%", 1240]}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <SliderItem
            image="/images/slider/europa.png"
            link="/continents/europa"
            title="Europa"
            subtitle="O Continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="/images/slider/america-do-norte.png"
            link="/continents/america-do-norte"
            title="America do Norte"
            subtitle="O continente montanhoso"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="/images/slider/america-do-sul.png"
            link="/continents/america-do-sul"
            title="America do Sul"
            subtitle="O continente tropical"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="/images/slider/africa.png"
            link="/continents/africa"
            title="Africa"
            subtitle="O continente mais diverso"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="/images/slider/asia.png"
            link="/continents/asia"
            title="Asia"
            subtitle="O maior continente"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            image="/images/slider/oceania.png"
            link="/continents/oceania"
            title="Oceania"
            subtitle="O continente das ilhas"
          />
        </SwiperSlide>
        ...
      </ChakraSwiper>
    </>
  );
}
