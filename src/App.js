import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <h1>Fernando Abreu</h1>
      <p className="subtitle">Full Stack Developer</p>
      <p className="subtitle">Born in Lisbon, on August 14th, 1994</p>
      <p className="about-me">
        I have always been passionate about computers since I was a little kid.
        During my high school years, I studied programming and gained
        proficiency in several languages, including Pascal, Java, MySQL, and
        HTML. Later on, I attended a prestigious coding bootcamp where I
        acquired full-stack development skills with HTML, CSS, JavaScript,
        React.js, MongoDB, Express.js, and Node.js. <br /> <br />
        Through my education and practical experience, I have developed a strong
        foundation in computer science and programming. I am eager to apply my
        skills to create innovative and efficient software solutions that will
        make a difference in people's lives. I am always learning and staying
        up-to-date with the latest technologies, and I am excited to take on new
        challenges and contribute to the tech industry. <br /> <br />
        Please find below a selection of my noteworthy projects that demonstrate
        my technical skills and experience.
      </p>
      <div className="projects">
        <div className="project">
          <h2>Leafie</h2>
          <p>
            A group project created in 24 hours for a hackathon. We designed a
            fictional art gallery website to promote an artist who creates art
            pieces from recycled materials. The site was built using Next.js and
            MongoDB.
          </p>
          <a
            href="https://github.com/Fernot94/Leafie"
            target="_blank"
            rel="noreferrer"
          >
            Check it out on GitHub
          </a>
        </div>
        <div className="project">
          <h2>Microsoft Themed Timer</h2>
          <p>
            A timer app designed based on the Microsoft logo. The app was built
            using React.js.
          </p>
          <a
            href="https://github.com/Fernot94/Microsoft-Themed-Timer"
            target="_blank"
            rel="noreferrer"
          >
            Check it out on GitHub
          </a>
        </div>
        <div className="project">
          <h2>Tic Tac Toe</h2>
          <p>
            A simple remake of the classic Tic Tac Toe game. Built using
            React.js.
          </p>
          <a
            href="https://github.com/Fernot94/tictactoe"
            target="_blank"
            rel="noreferrer"
          >
            Check it out on GitHub
          </a>
        </div>
        <div className="project">
          <h2>Bytes4Gamers</h2>
          <p>
            A final project for a bootcamp that involved creating a gambling
            website, mainly focused on poker. The website was built using
            Next.js, MongoDB, and Express.js.
          </p>
          <a
            href="https://github.com/MauroSerrano-dev/Bytes4Gamers"
            target="_blank"
            rel="noreferrer"
          >
            Check it out on GitHub
          </a>
        </div>
      </div>
      <div className="contacts">
        <a href="https://github.com/fernot94" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-abreu94/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:fernando.abreurm@gmail.com">Email</a>
      </div>
    </div>
  );
}

export default App;
