import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBCardImage,
  MDBCardFooter,
} from "mdb-react-ui-kit";

import "./Portfolio.css";
import cli from "../../images/cli.png";
import mvnBlog from "../../images/mvc-blog.png";
import pokemondex from "../../images/pokemondex.png";
import twytter from "../../images/twytter.png";

const Portfolio = () => {
  return (
    <MDBContainer fluid className="h-100 pb-4 bkgrd">
      <MDBRow>
        <MDBCol className="col-md-4">
          <MDBCard className="h-100">
            <MDBCardImage
              className="img-thumbnail"
              position="top"
              src={twytter}
            />
            <MDBCardBody>
              <MDBCardTitle>TwyTTer</MDBCardTitle>
              <MDBCardText>
                A Tech Blog built in MVC mode using Express as the backend. This
                is a full-stack application using the following technologies:
                Node.js and Express.js to create a RESTful API Handlebars.js as
                the template engine. MySQL and the Sequelize ORM for the
                database. Passport for authentication Heroku
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBCardLink href="https://github.com/annielawang/twytter">
                Repository link
              </MDBCardLink>
              <MDBCardLink href="https://twytter-redo.herokuapp.com/">
                Deployed app
              </MDBCardLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-md-4">
          <MDBCard className="h-100">
            <MDBCardImage
              className="img-thumbnail"
              position="top"
              src={mvnBlog}
            />
            <MDBCardBody>
              <MDBCardTitle>MVC Blog</MDBCardTitle>
              <MDBCardText>
                Most developers spend time reading and writing about technical
                concepts, recent advancements, and new technologies. So I want
                to build a CMS-style blog site where developers can publish
                their blog posts and comment on other developers’ posts.
                Node.js, Express.js, RESTful API Handlebars.js, HTML5, CSS3,
                Bootstrap MySQL, Sequelize, ORM Passport, Session, Local Storage
                Heroku
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBCardLink href="https://github.com/annielawang/14-MVC-Tech_Blog">
                Repository link
              </MDBCardLink>
              <MDBCardLink href="https://challenge14-mvc-tech-blog.herokuapp.com/">
                Deployed app
              </MDBCardLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-md-4">
          <MDBCard className="h-100">
            <MDBCardImage
              className="img-thumbnail"
              position="top"
              src={pokemondex}
            />
            <MDBCardBody>
              <MDBCardTitle>PokemonDex</MDBCardTitle>
              <MDBCardText>
                Use this tool to find valuable information about the pokemon you
                search up. Simply enter the pokemon name you wish to find and
                press search. The pokemon card will pop up with Vital stats,
                special ability, element type, and a youtube search of the
                pokemon. The page also renders your previous search inquiries as
                clickable buttons to the side. HTML5, CSS3, Bootstrap Ajax,
                JQuery Local Storage / Session Storage
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBCardLink href="https://github.com/annielawang/pokedex">
                Repository link
              </MDBCardLink>
              <MDBCardLink href="https://annielawang.github.io/pokedex/">
                Deployed app
              </MDBCardLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage className="img-thumbnail" position="top" src={cli} />
            <MDBCardBody>
              <MDBCardTitle>Employee Tracker</MDBCardTitle>
              <MDBCardText>
                This is a command-line application for managing a company's
                employee database, using Node.js, Inquirer, and MySQL. Node.js,
                Inquirer MySQL, SQL ORM
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBCardLink href="https://github.com/annielawang/12-SQL-Employee-Tracker">
                Repository link
              </MDBCardLink>
              <MDBCardLink href="https://github.com/annielawang/12-SQL-Employee-Tracker/blob/main/README.md">
                Deployed app
              </MDBCardLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Portfolio;
