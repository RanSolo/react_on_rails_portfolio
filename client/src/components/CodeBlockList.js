import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class CodeBlockList extends Component {
  state = {
    blocks: [
      { id: uuid(), location: 'App.js' },
      { id: uuid(), location: 'AppNavbar.js' }
    ]
  }

  render() {
    const { blocks } = this.state;
    return (
      <Container>
        <h1>Code Blocks</h1>
        <Button
          color="success"
          style={{marginBottom: '1rem'}}
          onClick={() => {
            const location = prompt('Enter Code Block');
            if(location) {
              this.setState(state => ({
                blocks: [...state.blocks, {id: uuid(), location}]
              }));
            }
          }}
        >
          +
        </Button>
        <ListGroup>
          <TransitionGroup className='example-list'>
            {blocks.map(({ id, location}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        blocks: state.blocks.filter(block => block.id !== id)
                      }));
                    }}
                  >&times;</Button>
                {location}
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
