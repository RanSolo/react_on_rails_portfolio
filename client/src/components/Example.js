import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Media, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { showExample } from '../actions/exampleActions';

const screenshotOrNot = (actual, description, url_type) => {
  var screen;
  if (url_type === 'Screenshot') {
    screen = <WithScreen actual={actual} description={description} />;
  } else {
    screen = <NoScreen description={description} />
  }
  return screen;
};

class Example extends Component {
  componentDidMount() {
    this.props.showExample(this.props.match.params.id);
  }

  render() {
    if (this.props.example) {
      const example = this.props.example[0];
      return (
        <Container>
          <h1>An example of {example.title}</h1>
          <ListGroup key={example.title}>
            <ListGroupItem>
              {example.description}
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                {example.urls.map(({id, actual, description, url_type}) => (
                  <Col key={id} md={6}>
                    <Button href={actual} color="link" target="_blank">
                      {url_type}
                    </Button>
                    {screenshotOrNot(actual, description, url_type)}
                  </Col>
                ))}
              </Row>
            </ListGroupItem>
          </ListGroup>
          <h3>Associated Code Blocks</h3>
          {example.code_blocks.map(({
            id, description, block, location,urls }) => (
            <ListGroup key={id}>
              <ListGroupItem>
                <Button color="link" target="_blank" href={location}>
                  On Github
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                {description}
              </ListGroupItem>
              <ListGroupItem>
                <code><pre>{block}</pre></code>
              </ListGroupItem>
              <ListGroupItem>
                {urls.map(({id, actual, url_type, description}) => (
                  <Button key={id} href={actual} className="btn btn-primary btn-lg btn-block" target="_blank">
                    {url_type}
                    {description}
                  </Button>
                ))}
              </ListGroupItem>
          </ListGroup>
          ))}
        </Container>
      );
    } else {
      return (
        <Container>
          <h1>Example</h1>
        </Container>
      );
    }

  }
}

const NoScreen = ({description}) => (
  <p>{description}</p>
);

const WithScreen = ({actual, description}) => (
  <Media>
    {description}
    <Media href="#">
      <Media className="img-fluid" src={actual} alt="screenshot" />
    </Media>

  </Media>
);

const mapStateToProps = (state) => ({
  example: state.example.example
});

export default connect(
  mapStateToProps, { showExample }
)(Example);
