import Styles from "./header.module.css"
function Header() {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.headerLogo}>Boruto</h1>
      <nav>
        <ul className={Styles.headerNavList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#teachers">Teachers</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;