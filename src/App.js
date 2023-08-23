import IntroVide from "./components/IntroVide.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.scss";
import freshImg from "./assets/academy.png";
import freshImg2 from "./assets/story.png";
import tedtalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import courseImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiwalaImg from "./assets/image3.png";
import data from "./data/data.json";

const yellow = "#fff100",
  pink = "#ed1e79",
  brown = "#d20120",
  white = "#fff";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  return (
    <>
      <IntroVide />

      {/* freshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* freshTopic-2  */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Ted-Talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedtalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        btnTxt={map.btn}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasBtn={false}
      />

        {/* course */}
        <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={courseImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

        {/* barat */}
        <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

        {/* chaiwala */}
        <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer/>
    </>
  );
}

export default App;
