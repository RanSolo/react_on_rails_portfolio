import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ExampleList extends Component {
  state = {
    items: [
      { id: uuid(), title: 'RESTful API creation' },
      { id: uuid(), title: 'Webstack: Rails 5.2 API, ActiveAdmin CMS, React Front End' }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const title = prompt('Enter Item');
            if(title) {
              this.setState(state => ({
                items: [...state.items, {id: uuid(), title}]
              }));
            }
          }}
        >
          Add Example
        </Button>
      </Container>
    );
  }
}

export default ExampleList;
