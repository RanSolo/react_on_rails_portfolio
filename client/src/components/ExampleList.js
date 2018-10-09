import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getExamples } from '../actions/exampleActions';
import PropTypes from 'prop-types';

class ExampleList extends Component {
  componentDidMount() {
    this.props.getExamples();
  }
  render() {
    const { examples } = this.props.example;
    return (
      <Container>
        <h1>Examples</h1>
        <Button
          color="success"
          style={{marginBottom: '1rem'}}
          onClick={() => {
            const title = prompt('Enter Example');
            if(title) {
              this.setState(state => ({
                examples: [...state.examples, {id: uuid(), title}]
              }));
            }
          }}
        >
          +
        </Button>
        <ListGroup>
          <TransitionGroup className='example-list'>
            {examples.map(({ id, title}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        examples: state.examples.
                                  filter(example => example.id !== id)
                      }));
                    }}
                  >&times;</Button>
                  {title}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ExampleList.propTypes = {
  getExamples: PropTypes.func.isRequired,
  example: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  example: state.example
});
export default connect(mapStateToProps, { getExamples })(ExampleList);
