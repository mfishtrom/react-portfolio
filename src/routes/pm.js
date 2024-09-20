import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import gantt from "../images/PM/GanttChart.png";
import sunny from "../images/PM/Sunny.gif";
import cod from "../images/PM/COD.gif";

function PrM() {
  return (
    <div className="App">
    <Header />

    <body>
      <h1>Project Management</h1>
      <div className="column center">
        <img src={gantt} alt="Gantt Chart"></img>
        <p className="caption">The above Gantt chart shows the typical timeline for full playable production.</p>
        <p className="caption">The playable ad for the "It's Always Sunny in Philadelphia" mobile game was created for Eastside Games
        in 2021. The playable for Call of Duty mobile game was created for Activision Games
        in 2020 via the MoPub organization. As Project Manager, I was responsible for the ideation, design, development, QA testing, and
        launch of the advertisement.
        To preview the playables, click on the associated images.</p>
      </div>
      <div className="playable2">
        <div className="column2">
            <a href="https://creatives.crossinstall.com/easts_alway_p2/latest/landscape.html?dev_nomraid=1" target="_blank">
              <img src={sunny} alt="Always Sunny Playable Preview" className="playable-preview"></img>
            </a>
        </div>
        <div className="column2">
            <a href="https://creatives.crossinstall.com/activ_callo_p2/latest/landscape.html?dev_nomraid=1" target="_blank">
              <img src={cod} alt="Call of Duty Playable Preview" className="playable-preview"></img>
            </a>
        </div>
      </div>
    </body>

    <Footer />
    </div>
  );
}

export default PrM;
