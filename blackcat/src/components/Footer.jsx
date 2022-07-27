import React from "react";
import { Link } from "react-router-dom";

//Iconos
import { BiPhoneCall, BiCreditCardAlt } from "react-icons/bi";
import { SiMaildotru } from "react-icons/si";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiSecurePaymentLine, RiFacebookBoxFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

function Footer() {
  const handleScroll = () => {
    setTimeout(
      () => window.scrollTo({ behavior: "smooth", top: 0, left: 0 }),
      300
    );
  };
  return (
    <footer class="footer has-background-color1">
      <div class="columns is-multiline">
        <div class="column">
          <strong>NAVEGACIÓN</strong>

          <Link to={"/"} style={{ color: "#291429" }}>
            <li onClick={handleScroll}>Inicio</li>
          </Link>

          <Link to={"/pedidos"} style={{ color: "#291429" }}>
            <li onClick={handleScroll}>Productos</li>
          </Link>

          <Link to={"/empresariales"} style={{ color: "#291429" }}>
            <li onClick={handleScroll}>Empresariales</li>
          </Link>

          <Link to={"/contact"} style={{ color: "#291429" }}>
            <li onClick={handleScroll}>Contacto</li>
          </Link>
        </div>
        <div class="column">
          <strong>MEDIOS DE PAGO</strong>
          <ul>
            <p>
              <BsCreditCard2Front /> Visa
            </p>
          </ul>
          <ul>
            <p>
              {" "}
              <BiCreditCardAlt /> Mstercard
            </p>
          </ul>
          <ul>
            <p>
              {" "}
              <RiSecurePaymentLine /> Mercado Pago
            </p>
          </ul>
          <ul>
            <p>
              {" "}
              <MdOutlinePayments /> Pago Fácil
            </p>
          </ul>
        </div>
        <div class="column">
          <strong>CONTACTANOS</strong>
          <li>
            {" "}
            <BiPhoneCall /> 1137637336
          </li>
          <li>
            {" "}
            <SiMaildotru /> blackcatpasteleria@gmail
          </li>
          <li>
            {" "}
            <FaMapMarkerAlt /> Avenida Siempreviva 742
          </li>
        </div>
        <div class="column">
          <strong>REDES SOCIALES</strong>
          <div>
            <a
              href="https://www.facebook.com/zuck"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookBoxFill size={30} />
            </a>
            <a
              href="https://www.instagram.com/leomessi/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/ricarfort"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
