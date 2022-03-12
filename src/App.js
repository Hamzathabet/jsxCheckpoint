import "./App.css";
import "./style.css";
import imageInSrc from "./assets/imageInSrc.jpg";
import videoInsrc from "./assets/myVideo.mp4";
function App() {
  return (
    <>
    <div style={{background:'#e5e5e5'}}>
      <div className="container">
        <div style={{ border: "solid 1px white", maxWidth: "100vw" }} className={'profile'}>
        <div className="container">
          <h1 className={"title red"}>Hamza Ben Thabet</h1>
          <br />
          <img src={imageInSrc} alt="image src" />
          <br />
          <img src="./imageInPublic.png" alt="image public" />
          </div>
        </div>

        <video width={320} height={240} controls>
          <source src={videoInsrc} type="video/mp4" />
        </video>
      </div>
      </div>
    </>
  );
}

export default App;
