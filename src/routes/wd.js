import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import wipeout from "../images/WD/WipeoutCancer.png";
import cte from "../images/WD/CTE.png";
import dcyouth from "../images/WD/DCYouth.png";

function WeD() {
  return (
    <div className="App">
    <Header />
    <div class="wd-page">
      <h1>Web Design</h1>

        <div className="site">
          <div className="column twothirds">
            <a href="https://www.wipeout-cancer.org/" target="_blank">
              <img src={wipeout} alt="Wipeout Cancer Homepage" className="homepage"></img>
            </a>
          </div>
          <div className="column onethird">
           <h3>Wipeout Cancer</h3>
            <p className="caption">Created with Wordpress and Transferred to Wix, Integrations with Shopify, Jotform and Mailchimp.
              <a href="https://www.wipeout-cancer.org/" target="_blank" className="description-link">www.wipeout-cancer.org</a>
            </p>
          </div>
        </div>

        <div>
          <div className="column twothirds">
            <a href="https://sites.google.com/jeffersonunion.net/juhsd-cte/home?authuser=2" target="_blank">
                <img src={cte} alt="JUHSD CTE Homepage" className="homepage"></img>
            </a>
          </div>
          <div className="column onethird">
            <h3>JUHSD Career Technical Education</h3>
            <p className="caption">Created Using Google Sites.
              <a href="https://sites.google.com/jeffersonunion.net/juhsd-cte/home?authuser=2" target="_blank" className="description-link">www.jeffersonunion.net/juhsd-cte</a>
            </p>
          </div>
        </div>

        <div>
          <div className="column twothirds">
            <a href="https://www.dcyouth.org/" target="_blank">
                <img src={dcyouth} alt="DCYHC Homepage" className="homepage"></img>
            </a>
          </div>
          <div className="column onethird">
            <h3>Daly City Youth Health Center</h3>
            <p className="caption">Created using Squarespace.
              <a href="https://www.dcyouth.org/" target="_blank" className="description-link">www.dcyouth.org</a>
            </p>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  );
}

export default WeD;
