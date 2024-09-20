import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import pumpkin from "../images/Graphic/PumpkinPatch.gif";
import pumpkinbrief from "../images/Graphic/PumpkinPatch.pdf";
import mu from "../images/Graphic/MamasUnidas.png";
import ggp from "../images/Graphic/EventPoster.png";
import river from "../images/Graphic/Coosa.gif";
import booklet from "../images/Graphic/CrystalContent.png";
import bookletdoc from "../images/Graphic/Booklet.pdf";
import museum from "../images/Graphic/Museum.gif";
import label from "../images/Graphic/BottleLabel.png"
import eventposter from "../images/Graphic/EventPoster.pdf";

function Graphic() {
  return (
    <div className="App">
    <Header />

    <body>
    <div className="section-header">
      <h1>Graphic Design</h1>
      <div className="research-topic">
          Below are some highlights of my graphic design work, including both print and digital media. I've been trained in and enjoy
          both mediums and exploring new ones as well. I also enjoy integrating physical art into my digital work.
      </div>
    </div>

    <div>
        <div className="column left">
          <img src={label} alt="Wine Bottle Label" className="left-image"></img>
          <p className="caption">This bottle label was a personal project of mine. I was very close with my great-grandfather and was
          devastated when we lost him suddenly the day after Thanksgiving in 2011 to a heart attack. For many years he made red wine
          vinegar in his garage in San Francisco. When my family made the difficult decision to sell the home, we divided the vinegar
          among the family and added these labels to each bottle as a reminder of our San Francisco roots and Italian heritage, as well as
          our love for "Big Papa" and our family.</p>

          <a href={pumpkinbrief} className="description-link" target="_blank"><img src={pumpkin} alt="PumpkinPatch Minigame Gif" className="left-image"/></a>
          <p className="caption">I used p5.js to create a simple video game that would teach kids how to use the keys on a keyboard.
          The game has the user select a pumpkin from a pumpkin patch, carve it, and then light it for Halloween. Though the game is very straightforward,
          it is a great introduction to keyboard skills. Click<a href="https://des427assignment1.000webhostapp.com/" className="description-link" target="_blank">here</a>to try it out!</p>

          <a href="https://www.dcyouth.org/"><img src={mu} alt="Mamas Unidas" className="left-image"></img></a>
          <p className="caption">Part of my role at the Daly City Youth Health Center is to create flyers and brochures for special events.
          This flyer for the Spanish-Speaking Mamas Unidas (Moms United) group is one I am especially proud of as I was able to utilize my
          Spanish-language skills.</p>
        </div>

        <div className="column center">
          <a href={eventposter} target="_blank"><img src={ggp} alt="Golden Gate Park Events Poster" className="center-image"></img></a>
          <p className="caption">The Golden Gate Park Events poster was created using both physical and digital assets, giving it a unique
          look that highlights the beauty of the park. I began this project by first organizing the event information into categories. I then
          created a hierarchy of information, where the title is the main draw of the event, then the date, time, and location. After figuring
          out a layout for the information, I conducted field research by visting Golden Gate Park multiple times and taking photos, drawings,
          and paintings of the beauty of the park. I then scanned and uploaded the different works and converted them to monotone coloring. To
          add to the poster without detracting from the information, I had to be mindful of the imagery placement. Once that was decided, I colored
          the poster in autumnal tones for the October events. After many drafts and fine tweaking, I was satisfied with the outcome. The final
          product was a 20 by 30 inch poster to be displayed around San Francisco.</p>
        </div>

        <div className="column right">
          <a href="https://www.youtube.com/watch?v=iQZGLuq7Urc&t=3s" target="_blank"><img src={river} alt="Coosa Riverkeeper Video" className="right-image"></img></a>
          <p className="caption">Volunteering is something that brings me joy. For the Coosa Riverkeeper in Alabame, I created this short animated
          video about how the water is tested before it is declared safe to swim in. I enjoyed drawing the characters and backgrounds in ProCreate
          based on images provided to me by the organization and then animating them to create a short film. Click<a href="https://www.youtube.com/watch?v=iQZGLuq7Urc&t=3s" target="_blank" className="description-link">here</a>to watch.</p>

          <a href={bookletdoc} target="_blank"><img src={booklet} alt="Crystal Content Booklet Design" className="right-image"></img></a>
          <p className="caption">For a class project, I created a booklet using only typography and existing essays to express my opinion on design.
          I found the assignment's constraints to be especially difficult, but was able to convey my opinion through layout and material. The booklet
          is 100% compostable (it is made from hemp paper) and if damped and planted, will bloom into wildflowers (the seeds are in the paper). I believe
          in simple, thoughtful, and intentional design choices as shown in this project. I also believe in creating new things from existing ones, which
          is why I chose to make the booklet out of compostable materials. This project gave me the opportunity to reflect on my values and style as a designer.</p>

          <a href="https://mfishtrom.github.io/reneighssance/" target="_blank"><img src={museum} alt="Reneighssance Museum" className="right-image"></img></a>
          <p className="caption">Using Blender and Unity, I created a 3D virtual museum tour displaying some of my art and the art of my peers. Taking inspiration
          from Beyonce's Renaissance album, I created the "Reneighssance" museum, where a disco horse guides you through three different rooms. The music and sound effects
          are coordinated with the rooms, creating an exciting experience for the user. I learned a lot about texture sheets, modeling, lighting, and game development
          through this project. Click<a href="https://mfishtrom.github.io/reneighssance/" target="_blank" className="description-link">here</a>to play.</p>
        </div>
    </div>

    </body>

    <Footer />
    </div>
  );
}

export default Graphic;
