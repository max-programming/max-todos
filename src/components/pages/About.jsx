import React from "react";
import { Container } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  return (
    <>
      <Container>
        <p style={{ fontSize: "1.3rem" }}>
          <b>Max Todos</b> is an open-source project started by Usman Sabuwala.
          This app focuses on the ease of use of a Todo App. Write your todos,
          change some settings, Enjoy!
        </p>
        <h2>Contact</h2>
        <a
          href="https://twitter.com/MaxProgramming1"
          style={{
            color: "#1CA0F1",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/max-programming"
          style={{
            color: "#24292E",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/usman.sabuwala.7"
          style={{
            color: "#0D8BF0",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://youtube.com/MaxProgramming"
          style={{
            color: "#FD0000",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/usmansabuwala7/"
          style={{
            color: "#CD2E96",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </Container>
    </>
  );
};

export default About;
