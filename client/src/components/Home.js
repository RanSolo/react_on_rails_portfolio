import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';


class Home extends Component {

  render() {
    return (
      <Container>
        <h1>Welcome</h1>
        <p>
          Web Developer with 4+ years of experience in designing and developing\
          both user interfaces and server-side solutions. Proven ability in
          optimizing web functionality, data retrieval, and workflow
          efficiencies. Work collaboratively with clients and in-house teams to
          provide effective and efficient front- and back-end web development.
        </p>
        <h2>CURRENT PROJECTS</h2>
        <ListGroup>
          <ListGroupItem>
            http://www.milligram.biz
            milligram.biz - Milligram was created as a web-based medication
            price transparency engine. Our software helps patients and providers
            find medication at the lowest price in any given zip code. Our
            translations support English, Spanish, Tagalog, and Chinese. With
            our three data partners, Milligram searches prices of medications
            nationwide at 65,000+ pharmacies, offering the lowest prices on the
            internet.
          </ListGroupItem>
          <ListGroupItem>
            scholarraise.com - Scholar Raise is a crowdfunding service that
            helps you save for your child’s future college education. This is a
            Rails API with a react front end. - Scholar Raise is a crowdfunding
            service that helps you save for your child’s future college
            education. This is a Rails api with a react front end.
          </ListGroupItem>
          <ListGroupItem>
            MRB Monitor - MRB Monitor provides an independent, robust, reliable,
            and up-to-date corporate information on marijuana-related businesses
            ("MRBs"). We aggregate unstructured data from hundreds of disparate
            sources and neatly organize it into a comprehensive, cloud-based
            database.
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

export default Home;
