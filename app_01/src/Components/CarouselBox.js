import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import forest from "../assets/forest.jpg";
import second from "../assets/second.jpg";
import thought from "../assets/thought.jpg";
export default class carouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={thought} alt="forest" />
          <Carousel.Caption>
            <h1>forest image</h1>
            <p>
              В соседнем городе бушует странное создание по имени Кицунэ. Это
              невероятно сильный монстр, который питается человеческим
              гипофизом. Дабы попытать удачу, братья возлагают поиск информации
              о его уничтожении на Бобби. Пока происходит расследование со
              стороны Винчестеров, под прицел существа попадает еще один
              человек.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="forest" />
          <Carousel.Caption>
            <h1>second image</h1>
            <p>
              В соседнем городе бушует странное создание по имени Кицунэ. Это
              невероятно сильный монстр, который питается человеческим
              гипофизом. Дабы попытать удачу, братья возлагают поиск информации
              о его уничтожении на Бобби. Пока происходит расследование со
              стороны Винчестеров, под прицел существа попадает еще один
              человек.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forest} alt="forest" />
          <Carousel.Caption>
            <h1>forest image</h1>
            <p>
              В соседнем городе бушует странное создание по имени Кицунэ. Это
              невероятно сильный монстр, который питается человеческим
              гипофизом. Дабы попытать удачу, братья возлагают поиск информации
              о его уничтожении на Бобби. Пока происходит расследование со
              стороны Винчестеров, под прицел существа попадает еще один
              человек.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
