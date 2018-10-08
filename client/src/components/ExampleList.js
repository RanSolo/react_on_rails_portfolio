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
        <h1>Examples</h1>
        <Button
          color="success"
          style={{marginBottom: '1rem'}}
          onClick={() => {
            const title = prompt('Enter Item');
            if(title) {
              this.setState(state => ({
                items: [...state.items, {id: uuid(), title}]
              }));
            }
          }}
        >
          +
        </Button>
        <ListGroup>
          <TransitionGroup className='example-list'>
            {items.map(({ id, title}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
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

export default ExampleList;
