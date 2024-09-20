import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import drawings from "../images/Other/MMVDrawings.png";
import welding from "../images/Other/Welding.png";
import mmv from "../images/Other/MMVFinal.png";
import tft from "../images/Other/ThermoformedTableware.png";
import crafts from "../images/Other/Crafting.png";

function Other() {
  return (
    <div className="App">
    <Header />
    <div>
      <h1>Other Work</h1>

      <div className="column twothirds">
        <img src={drawings} alt="Drawings" className="homepage"></img>
        <img src={welding} alt="Me Welding" className="homepage"></img>
        <img src={mmv} alt="Final Product" className="homepage"></img>
      </div>
      <div className="column onethird">
       <h3>Metal Motion Vehicle Project</h3>
        <p className="caption">I learned how to weld! I was quite horrible at it, but I love trying new things.</p>
      </div>

      <div className="column twothirds">
        <img src={tft} alt="CAD Model for Thermoformed Tableware" className="homepage"></img>
      </div>
      <div className="column onethird">
       <h3>Thermoformed Tableware</h3>
        <p className="caption">I designed children's utensils. Though my end product wasn't beautiful, I really enjoyed the process.</p>
      </div>

      <div className="column twothirds">
        <a href="https://linktr.ee/mad.i.y.crafting" target="_blank">
          <img src={crafts} alt="3D Printed Photo Keychains" className="homepage"></img>
        </a>
      </div>
      <div className="column onethird">
       <h3>Crafting</h3>
        <p className="caption">I am very passionate about creating things. I have a mini 3D printer, Cricut, and sewing machine that I use regularly.</p>
      </div>
    </div>

    <Footer />
    </div>
  );
}

export default Other;
