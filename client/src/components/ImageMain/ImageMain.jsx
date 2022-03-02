import { Parallax } from 'react-parallax';
import fon from '../../img/fon.jpeg';
import './ImageMain.css';
import Typical from "react-typical";

const ImageMain = () => (
  <Parallax className='image-imageMain' bgImage={fon} strength={200}>
    <div className="image-content">
      <div className="parallax-text">
        <p>Подарите <br></br>незабываемые выходные в загородном доме</p>
        <div className="parallax-text-2">
          <Typical
            loop={Infinity}
            steps={[
              "Идеальный подарок на 23 февраля",
              1000,
              "Идеальный подарок на 8 марта",
              1000,
              "Идеальный подарок на любой случай",
              1000,
            ]}
          />
        </div>
        <button className='bnt-buy'>  <a href="/booking"><span>Бронировать?</span></a></button>
      </div>
    </div>
  </Parallax>
);

export default ImageMain;
