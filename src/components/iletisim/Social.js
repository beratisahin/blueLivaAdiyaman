import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";

function Iletisim() {
  useDocumentTitle("Adıyaman Lazer Epilasyon - Adıyaman Blue Liva Güzelik Salonu ");
  return (
    <div className="row">
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://goo.gl/maps/aJYQ2zvETjxbswhe6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i1} className="contactIcons" title="Adres için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
          <span style={{color:"#2B7785"}}><b>Adres:</b></span><br/>
          Hoca Ömer Mah. 215 Sok Şatoser İş Merkezi No:4 Kat:3/5  <br/> <b>Merkez / Adıyaman </b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="tel: +905061712702"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#2B7785"}}><b>Rezervasyon:</b></span><br/>
          <b>0506 171 27 02</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <img src={i3} className="contactIcons" title="Çalışma Saatleri"></img>
        <p className="contactText">
         <span style={{color:"#2B7785"}}><b>Çalışma Saatleri:</b></span><br/>
          Her Gün: 09:00 – 19:00
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905061712702" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#2B7785"}}><b>WhatsApp:</b></span><br/>
          <b>0506 171 27 02</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/blue.liva.adiyaman/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#2B7785"}}><b>Instagram:</b></span><br/>
          @blue.liva.adiyaman
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://www.facebook.com/profile.php?id=100086763035247"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#2B7785"}}><b>Facebook:</b></span><br/>
        @blue.liva.adiyaman
        </p>
      </div>
    </div>
  );
}

export default Iletisim;
