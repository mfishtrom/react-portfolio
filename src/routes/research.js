import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import protest from "../images/Research/ProtestCover.png";
import protestdoc from "../images/Research/CreativePracticeAsProtest.pdf";
import cwp from "../images/Research/CWPCover.png";

function Research() {
  return (
    <div className="App">
    <Header />
    <div>

      <div class="column left">
      </div>

      <div class="column center">
        <h1>Research</h1>

        <h3><b>Design as Protest</b></h3>
        <div className="research-topic">
            On researching design as protest, I looked into plastic bag usage.The findings were that industries are not regulated on packaging
            too often, which is something that we can fight to have changed. A summary of my findings can be found<a href={protestdoc} target="_blank" className="healonward">here.</a>
        </div>

        <h3><b>Creative Work Project</b></h3>
        <div className="research-topic">
            In completion of my Master's Degree, I designed a database for cancer patients to use to
            find holistic care services in San Francisco, San Mateo, and Alameda Counties.
            The final prototype can be viewed at<a href="https://www.healonward.com/" target="_blank" className="healonward">www.healonward.com.</a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Research;
