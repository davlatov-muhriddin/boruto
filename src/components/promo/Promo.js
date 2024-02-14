import Styles from "./promo.module.css"

function Promo() {
  return (
    <div className={Styles.promo} id={"home"}>
      <div className={Styles.promoLeft}>
        <h1>He I am <span>Uzumaki Boruto</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at commodi cumque dolores esse fugit id iste laudantium, molestiae, necessitatibus nemo nisi omnis, quia reprehenderit repudiandae velit? Aspernatur, doloremque?</p>
        <button>Show More</button>
      </div>
      <div className={Styles.promoRight}>
        <img src="./images/boruto.jpeg" alt="boruto"/>
      </div>
    </div>
  );
}

export default Promo;