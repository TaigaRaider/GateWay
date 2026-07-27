export const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src="src/assets/logo.png" id="logo" alt="GateWay" />
      <ul className="navlinks">
        <li className="navElement">
          <a href="#about">Me</a>
        </li>
        <li className="navElement">
          <a href="#expertise">Expertise</a>
        </li>
        <li className="navElement">
          <a href="#projects">Projects</a>
        </li>
        <li className="navElement">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
