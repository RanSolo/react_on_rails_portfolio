import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { showExample } from '../actions/exampleActions';

class Example extends Component {
  componentDidMount() {
    this.props.showExample(this.props.match.params.id);
  }

  onDeleteClick = (id) => {
    this.props.deleteExample(id)
  };

  render() {
    const example = this.props.example
    return (
      <Container>
          <h1>Example</h1>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  example: state.example.example
});

export default connect(
  mapStateToProps, { showExample }
)(Example);
