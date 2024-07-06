import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../../icons/logo.svg";
import backgroundImage from "../../icons/background.svg";
import icon1 from "../../icons/fullstories.svg";
import icon2 from "../../icons/posting.svg";
import icon3 from "../../icons/feedback.svg";
import background2 from "../../icons/background2.svg";
import tickIcon from "../../icons/tick.svg";
import vector from "../../icons/Vector.svg";
import tick2 from "../../icons/icon2.svg";
import logo1 from "../../icons/reddit.svg";
import logo2 from "../../icons/writeas.svg";
import logo3 from "../../icons/quora.svg";
import logo4 from "../../icons/ghost.svg";
import logo5 from "../../icons/askfm.svg";
import logo6 from "../../icons/animeplanet.svg";
import logo7 from "../../icons/wikihow.svg";
import logo8 from "../../icons/stackexchange.svg";
import logo9 from "../../icons/answers.svg";
import logo10 from "../../icons/myanimelist.svg";
import logo11 from "../../icons/stacjoverflow.svg";
import logo12 from "../../icons/medium.svg";
import logo13 from "../../icons/ask.svg";
import imageSrc from "../../icons/image.svg";
import rhombusImage from "../../icons/rhombus.svg";
import shape3 from "../../icons/shape3.svg";
import { useNavigate } from "react-router-dom";
import bar from "../../icons/bar.svg";
import shape43 from "../../icons/shape43.svg";
import ReviewSection from "./ReviewsCarousel";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div
      className={styles.container2}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className={styles.navbar}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className={styles.authLinks}>
          <Link to="/Login" className={styles.loginLink}>
            Log In
          </Link>
          <Link to="/SignUp" className={styles.getStartedButton}>
            Get Started
          </Link>
        </div>
      </nav>
      <header className={styles.header}>
        <h1>
          Fast and Automatic
          <br />
          Anime and Fantasy
          <br />
          Writing
        </h1>
        <div className={styles.verticalRectangles}>
          <div
            className={styles.rectangle}
            onClick={() => navigateToPage("/publications")}
          >
            <img src={tick2} alt="Icon" className={styles.rectangleIcon} />
            <div className={styles.rectangleText}>
              <h3>Develop Publications</h3>
            </div>
          </div>
          <div
            className={styles.rectangle}
            onClick={() => navigateToPage("/fanfiction")}
          >
            <img src={tick2} alt="Icon" className={styles.rectangleIcon} />
            <div className={styles.rectangleText}>
              <h3>Perfect for Fan fiction</h3>
            </div>
          </div>
          <div
            className={styles.rectangle}
            onClick={() => navigateToPage("/writing")}
          >
            <img src={tick2} alt="Icon" className={styles.rectangleIcon} />
            <div className={styles.rectangleText}>
              <h3>Write, Review and Fix Text</h3>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.subHeader}>
        <p>
          Texts written by artificial intelligence lmmediate, easy and with
          amazing results
        </p>
      </div>
      <div className={styles.buttons}>
        <Link to="/Startfreetrail" className={styles.freeTrialButton}>
          FREE TRIAL
        </Link>
        <Link to="/sign-up-google" className={styles.signUpGoogleButton}>
          SIGN UP WITH GOOGLE
        </Link>
      </div>
      <div className={styles.footer}>
        <h2>Quality Content In just One click</h2>
      </div>
      <div className={styles.footer2}>
        <h2>
          Whether you need it urgently or just don't like to wait, our AI takes
          just seconds to deliver a complete work, no more waiting in commission
          queue.
        </h2>
      </div>

      <div className={styles.rectangleRow}>
        <div
          className={styles.rectangle1}
          onClick={() => navigateToPage("/full-stories")}
        >
          <div className={styles.circle1}>
            <img src={icon1} alt="Icon 1" />
          </div>
          <h3>Full Stories</h3>
          <p>Interesting and complex, with a good development and ending</p>
        </div>
        <div
          className={styles.rectangle2}
          onClick={() => navigateToPage("/posting")}
        >
          <div className={styles.circle1}>
            <img src={icon2} alt="Icon 2" />
          </div>
          <h3>Posting</h3>
          <p>
            For reddit or Quora, continue your conversation or post in your blog
          </p>
        </div>
        <div
          className={styles.rectangle3}
          onClick={() => navigateToPage("/feedback")}
        >
          <div className={styles.circle1}>
            <img src={icon3} alt="Icon 3" />
          </div>
          <h3>Feedback</h3>
          <p>
            In addition to writing, the AI can review texts and give tips to
            improve them.
          </p>
        </div>
      </div>
      {/* Image and Text Section */}
      <div className={styles.imageAndTextSection}>
        <img src={background2} alt="Background 2" />
        <div className={styles.textSection}>
          <h2>Anime Text in a Blink Automatic and Immediate</h2>
          <p>
            The technology of our AI assures great writing, without waiting,
            without creative block, instant content only.
          </p>
        </div>
      </div>
      <div className={styles.tickPoints}>
        <div className={styles.tickPoint1}>
          <img src={tickIcon} alt="Tick Icon" />
          <p>Powered by GPT-3 from OpenAI</p>
        </div>
        <div className={styles.tickPoint2}>
          <img src={tickIcon} alt="Tick Icon" />
          <p>Different genres and tones</p>
        </div>
        <div className={styles.tickPoint3}>
          <img src={tickIcon} alt="Tick Icon" />
          <p>To publish on networks or use them in your campaigns</p>
        </div>
      </div>

      {/* Read More Link */}
      <Link to="/read-more" className={styles.readMoreLink}>
        Read More
        <img src={vector} alt="Arrow Icon" />
      </Link>

      <div className={styles.newFrame}>
        <div className={styles.horizontalLineLeft}></div>
        <h3 className={styles.frameText}>The best tool for</h3>
        <div className={styles.horizontalLineRight}></div>
      </div>

      <div className={styles.logosSection}>
        <div className={styles.logoRow}>
          <img src={logo1} alt="Logo 1" className={styles.logo1} />
          <img src={logo2} alt="Logo 2" className={styles.logo2} />
          <img src={logo3} alt="Logo 3" className={styles.logo3} />
          <img src={logo4} alt="Logo 4" className={styles.logo4} />
          <img src={logo5} alt="Logo 5" className={styles.logo5} />
          <img src={logo6} alt="Logo 6" className={styles.logo6} />
          <img src={logo7} alt="Logo 7" className={styles.logo7} />
        </div>
        <div className={styles.logoRow}>
          <img src={logo1} alt="Logo 1" className={styles.logo1} />
          <img src={logo2} alt="Logo 2" className={styles.logo2} />
          <img src={logo3} alt="Logo 3" className={styles.logo3} />
          <img src={logo4} alt="Logo 4" className={styles.logo4} />
          <img src={logo5} alt="Logo 5" className={styles.logo5} />
          <img src={logo6} alt="Logo 6" className={styles.logo6} />
          <img src={logo7} alt="Logo 7" className={styles.logo7} />
        </div>
      </div>
      <div className={styles.logosSection2}>
        <div className={styles.logoRow2}>
          <img src={logo8} alt="Logo 8" className={styles.logo8} />
          <img src={logo9} alt="Logo 9" className={styles.logo9} />
          <img src={logo10} alt="Logo 10" className={styles.logo10} />
          <img src={logo11} alt="Logo 11" className={styles.logo11} />
          <img src={logo12} alt="Logo 12" className={styles.logo12} />
          <img src={logo13} alt="Logo 13" className={styles.logo13} />
        </div>
        <div className={styles.logoRow2}>
          <img src={logo8} alt="Logo 8" className={styles.logo8} />
          <img src={logo9} alt="Logo 9" className={styles.logo9} />
          <img src={logo10} alt="Logo 10" className={styles.logo10} />
          <img src={logo11} alt="Logo 11" className={styles.logo11} />
          <img src={logo12} alt="Logo 12" className={styles.logo12} />
          <img src={logo13} alt="Logo 13" className={styles.logo13} />
        </div>
      </div>
      <div className={styles.andManyMore}>And many more</div>
      <div className={styles.animeTextHeader}>
        Anime Text in a Blink
        <br />
        Automatic and Immediate
      </div>
      <div className={styles.animeTextSubheader}>
        The technology of our AI assures great writing, without waiting, without
        creative block, instant content only.
      </div>
      <img src={rhombusImage} alt="Rhombus" className={styles.rhombusImage} />
      <img
        src={imageSrc}
        alt="Above Rhombus"
        className={styles.imageAboveRhombus}
      />
      <div className={styles.rectangle23}></div>
      <div className={styles.rectangle24}></div>
      <h2 className={styles.textAboveRectangle}>
        Fantasy Stories and Anime Post Specialized AI
      </h2>
      <p className={styles.aiText}>
        Our artificial intelligence can complete, start, continue or make from
        scratch a good anime and fantasy story, a reddit post or an answer to
        conversations.
      </p>
      <h3 className={styles.numberText}>20+</h3>
      <p className={styles.aiPatternText}>AI and Machine Learning Patterns</p>
      <h3 className={styles.numberText1}>76+</h3>
      <p className={styles.aiPatternText1}>
        Users approve and use regularly AI writing
      </p>
      <h3 className={styles.numberText2}>>96%</h3>
      <p className={styles.aiPatternText2}>Proven accuracy</p>
      <h3 className={styles.numberText3}>67</h3>
      <p className={styles.aiPatternText3}>Industry leading eNPS score</p>

      <img src={shape3} alt="shape3" className={styles.shape3} />
      <h2 className={styles.textAboveRectangle2}>
        Within the reach of any anime fan Easy to use and effective
      </h2>
      <h2 className={styles.textAboveRectangle3}>
        Our AI will enhance the quality of your fan fiction or your post, it can
        create an interesting backstory or it can even advise you on how to
        continue with your text or conversation
      </h2>
      <h2 className={styles.textAboveRectangle4}>What the say about us </h2>
      {/* Reviews Section */}
      <div className="App">
        <ReviewSection />
      </div>

      {/* Rectangle */}
      <div
        className={styles.colorRectangle}
        style={{
          top: "5979px",
          left: "-22px",
          width: "1917px",
          height: "666px",
        }}
      />

      {/* Text "CLIENTS" */}
      <div
        className={styles.clientsText}
        style={{ top: "6319px", left: "268px" }}
      >
        CLIENTS
      </div>

      <div
        className={styles.socialText}
        style={{ top: "6319px", left: "628px" }}
      >
        SOCIAL MEDIA
      </div>

      <div
        className={styles.socialText}
        style={{ top: "6319px", left: "1348px" }}
      >
        SUPPORT
      </div>

      <div
        className={styles.socialText}
        style={{ top: "6319px", left: "988px" }}
      >
        LEGAL INFO
      </div>

      {/* Text "Login | Sign up" links */}
      <div
        className={styles.loginSignupLinks}
        style={{ top: "6386.52px", left: "268px" }}
      >
        <a href="/login" className={styles.link}>
          Login
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6420.52px", left: "268px" }}
      >
        <a href="/signup" className={styles.link}>
          Sign up
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6386.52px", left: "628px" }}
      >
        <a href="/twitter" className={styles.link}>
          Twitter
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6386.52px", left: "988px" }}
      >
        <a href="/info" className={styles.link}>
          Legal information
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6420.52px", left: "988px" }}
      >
        <a href="/conditions" className={styles.link}>
          Terms & Conditions
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6454.52px", left: "988px" }}
      >
        <a href="/policy" className={styles.link}>
          Privacy Policy
        </a>
      </div>

      <div
        className={styles.loginSignupLinks}
        style={{ top: "6386.52px", left: "1348px" }}
      >
        <a href="/helpdesk" className={styles.link}>
          Helpdesk
        </a>
      </div>
      {/* Bar SVG */}
      <img
        src={bar}
        className={styles.barSvg}
        style={{
          top: "5682px",
          left: "-72px",
          width: "1967px",
          height: "297px",
        }}
        alt="Bar SVG"
      />

      {/* Image shape43.svg */}
      <img
        src={shape43}
        className={styles.shape43Svg}
        style={{
          top: "5493px",
          left: "258px",
          width: "1410px",
          height: "647px",
        }}
        alt="Shape43 SVG"
      />

      {/* Text "Try it for free right now!" */}
      <div
        className={styles.tryFreeText}
        style={{ top: "5630px", left: "378px", width: "699px", height: "58px" }}
      >
        Try it for free right now!
      </div>

      {/* Text "Test the quality of our program..." */}
      <div
        className={styles.testQualityText}
        style={{ top: "5747px", left: "378px", width: "679px", height: "64px" }}
      >
        Test the quality of our program and let yourself be convinced by the
        effectiveness of our AI, start right now to generate quality content!
      </div>

      {/* Button "SIGN UP WITH EMAIL" */}
      <button
        className={styles.emailSignupButton}
        style={{ top: "6004px", left: "379px", width: "297px", height: "61px" }}
        onClick={() => navigateToPage("/SignUp")}
      >
        SIGN UP WITH EMAIL
      </button>

      {/* Button "SIGN UP WITH GOOGLE" */}
      <button
        className={styles.googleSignupButton}
        style={{ top: "6004px", left: "687px", width: "297px", height: "61px" }}
        onClick={() => navigateToPage("/SignUp")}
      >
        SIGN UP WITH GOOGLE
      </button>
      {/* Line */}
      <div className={styles.line} style={{ top: "6543px" }} />

      {/* Text "T22 All rights reserved" */}
      <div
        className={styles.footerText}
        style={{ top: "6577px", left: "268px" }}
      >
        T22 All rights reserved
      </div>
    </div>
  );
};

export default LandingPage;
