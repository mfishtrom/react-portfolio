import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import gif from "../images/Home/tree_logo.gif";
import community from "../images/Home/community.png";
import growth from "../images/Home/growth.png";
import comfort from "../images/Home/comfort.png";

function Home() {
  return (
    <div className="App">
        <Header />
        <body className="carousel">
            <img className="carousel-item" src={gif} alt="Resilience"/>
        <p><b className="title">About</b><br></br>
            <div className="about">
                Madi Fishtrom recently graduated Summa Cum Laude with her Master of Arts in Design from San Francisco State University.
                She previously was a project manager for creatives, and found herself drawn to being the
                one creating the work, not managing it. This led her to pursue a degree in Design.
                As the daughter of educators, Madi feels most at home in a space of learning and growth. During her first semester of
                graduate school, Madi was diagnosed with Hodgkin's Lymphoma and underwent six months of treatment while remaining a
                full-time student. Her dedication to her education and passion for equitable healthcare leads her interest to a career
                in medical service design, research, and teaching. Her creative work project research was titled,
                "Designing Better Access to Holistic Care for Cancer Patients," which housed a database of information on practices
                to undergo in conjunction with traditional medical treatment for cancer patients.
            </div>
        </p>
        </body>
        <Footer />
    </div>
  );
}

export default Home;
