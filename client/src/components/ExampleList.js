import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ExampleModal from './ExampleModal';
import Example from './Example';
import { connect } from 'react-redux';
import { getExamples, deleteExample } from '../actions/exampleActions';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, withRouter} from 'react-router-dom';

class ExampleList extends Component {
  componentDidMount() {
    this.props.getExamples();
  }

  onDeleteClick = (id) => {
    this.props.deleteExample(id)
  };

  render() {
    const { examples } = this.props.example;
    return (
      <Container>
        <h1>Examples</h1>
        {/* <ExampleModal /> */}
        <ListGroup>
          <TransitionGroup className='example-list'>
            {examples.map(({ id, title }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {/* <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button> */}
                  <Link to={`/examples/${id}`}>
                    {title}
                  </Link>
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

export default connect(
  mapStateToProps, { getExamples, deleteExample }
)(ExampleList);
