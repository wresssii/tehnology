import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
              <p>
              На данный момент наш интернет-магазин предоставляет широкий ассортимент современной продукции и обеспечивает быструю недорогую доставку по России, Украине, Казахстану и Кыргызстану. Клиентская база постоянно растет и насчитывает уже более 10000 счастливых клиентов.
              </p>
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">наши данные</p>
            <div className="Foot_links flex">
              <Link className="Foot_link Foot_link__inst" />
              <Link className="Foot_link Foot_link__fb" />
              <Link className="Foot_link Foot_link__tw" />
            </div>
          </div>
        </div>
        <div className="Foot_bot">
          <p>
          Карта сайта 
          </p>
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
