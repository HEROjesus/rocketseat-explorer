import { Container, Main, Presentation } from "./style"

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Section from "../../../components/section"
import Card from "../../../components/card"

import cookieFruit from "../../../assets/images/cookieFruit.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export function Home() {
  return (
    <Container>
      <Header/>

      <Main>
        <Presentation>
          <div>
            <img src={cookieFruit} alt="Biscoito de Frutas" />
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Presentation>

        <Section title="Refeições">
          <Swiper
            slidesPerView={3.4}
            centeredSlides={false}
            spaceBetween={27}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
                spaceBetween: 27,
              },
              370: {
                slidesPerView: 1.6,
                spaceBetween: 27,
              },
              410: {
                slidesPerView: 1.8,
                spaceBetween: 27,
              },
              500: {
                slidesPerView: 2.2,
                spaceBetween: 27,
              },
              580: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              660: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              769: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              950: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
              1136: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Sobremesas">
          <Swiper
            slidesPerView={3.4}
            centeredSlides={false}
            spaceBetween={27}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
                spaceBetween: 27,
              },
              370: {
                slidesPerView: 1.6,
                spaceBetween: 27,
              },
              410: {
                slidesPerView: 1.8,
                spaceBetween: 27,
              },
              500: {
                slidesPerView: 2.2,
                spaceBetween: 27,
              },
              580: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              660: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              769: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              950: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
              1136: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Bebidas">
          <Swiper
            slidesPerView={3.4}
            centeredSlides={false}
            spaceBetween={27}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
                spaceBetween: 27,
              },
              370: {
                slidesPerView: 1.6,
                spaceBetween: 27,
              },
              410: {
                slidesPerView: 1.8,
                spaceBetween: 27,
              },
              500: {
                slidesPerView: 2.2,
                spaceBetween: 27,
              },
              580: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              660: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              769: {
                slidesPerView: 2.6,
                spaceBetween: 27,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 27,
              },
              950: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
              1136: {
                slidesPerView: 3.4,
                spaceBetween: 27,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>
      </Main>

      <Footer/>
    </Container>
  )
}