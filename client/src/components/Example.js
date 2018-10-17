import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table, Media, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showExample } from '../actions/exampleActions';

const screenshotOrNot = (actual, description, url_type) => {
  var screen;
  if (url_type == 'Screenshot') {
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
    const example = this.props.example

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
                {example.urls.map(({actual, description, url_type}) => (
                  <Col md={6}>
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
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Block</th>
                  <th>URLS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <Button color="link" target="_blank" href={location}>
                      On Github
                    </Button>
                  </td>
                  <td>{description}</td>

                  <td><code><pre>{block}</pre></code></td>

                  <td>
                    {urls.map(({actual, url_type}) => (
                      <ListGroup key={url_type}>
                        <ListGroupItem>
                          <Button href={actual} color="link" target="_blank">
                            {url_type}
                          </Button>
                        </ListGroupItem>
                      </ListGroup>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
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
    <Media left href="#">
      <Media src={actual} alt="screenshot" />
    </Media>
  </Media>
);

const mapStateToProps = (state) => ({
  example: state.example.example
});

export default connect(
  mapStateToProps, { showExample }
)(Example);
