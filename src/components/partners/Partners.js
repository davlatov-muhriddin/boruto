import Styles from "./partners.module.css"
import {useState} from "react";
function Partners() {

  const [partners, setPartners] = useState([
    {id: 1, title: "Sarada Uchiha", image: "https://yt3.googleusercontent.com/jr2lweFm0CbKC94RLcegRypJnPTZz_eRYi562GPFJDYozsioyAPt-b2IcnZ3xeovtyuPXvGmqg=s900-c-k-c0x00ffffff-no-rj"},
    {id: 2, title: "Mitsuki Orachimaru", image: "https://w.forfun.com/fetch/6b/6b1491e459defe8d48b02de26a320f68.jpeg?w=1800"},
    {id:3, title:"Kawaki Uzumaki", image: "https://i.pinimg.com/originals/eb/6b/37/eb6b37cd28d4cee92565535ac9640cda.jpg"}
  ])


  return (
    <div className={Styles.partners} id={"partners"}>
      <h1>Partners</h1>
      <div className={Styles.partnersCards}>
        {partners.map((partner) => (
          <div className={Styles.partnerCard}>
            <img src={partner.image} alt={partner.title}/>
            <div className={Styles.partnerCardBody}>
              <h2>{partner.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Partners;