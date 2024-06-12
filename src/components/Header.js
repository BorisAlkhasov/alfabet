import headerImage from '../assets/header.png';
export default function Header() {
  return (
    <header>
      <img src={headerImage} alt="header" className="header-image" />
    </header>
  );
}
