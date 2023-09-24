import "./home.css";
import logo from './header-pic.png';

function Home() {
  return (
    <div className="home">
      <h1>GIGI'S KICK'IN HEELS CLOSET</h1>
      <header className="App-header">
        <div className="image-container">
          <img src={logo} className="header-pic" alt="logo" />
        </div>{" "}
        <div className="image-container">
          <img src={logo} className="header-pic" alt="logo" />
        </div>
        <div className="image-container">
          <img src={logo} className="header-pic" alt="logo" />
        </div>
      </header>
      <h1>OnlineStore</h1>
      <h4>Sexy Heels To Fit Your Appetite</h4>
    </div>
  );
}

export default Home;
