import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getExamples = this.getExamples.bind(this)
    this.getExample = this.getExample.bind(this)
  }

  componentDidMount () {
    this.getExamples()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getExamples () {
    this.fetch('/api/examples')
      .then(examples => {
        if (examples.length) {
          this.setState({examples: examples})
          this.getExample(examples[0].id)
        } else {
          this.setState({examples: []})
        }
      })
  }

  getExample (id) {
    this.fetch(`/api/examples/${id}`)
      .then(example => this.setState({example: example}))
  }

  render () {
    let {examples, example} = this.state
    return examples
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            Code Examples
          </Header.Content>
        </Header>
        <Divider hidden section />
      {examples && examples.length
          ? <Button.Group color='teal' fluid widths={examples.length}>
            {Object.keys(examples).map((key) => {
              return <Button active={example && example.id === examples[key].id} fluid key={key} onClick={() => this.getExample(examples[key].id)}>
                {examples[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No examples found.</Container>
        }
        <Divider section />
      {example &&
          <Container>
            <Header as='h2'>{example.title}</Header>
          {example.description && <p>{example.description}</p>}
            {example.code_blocks &&
              <Segment.Group>
                {example.code_blocks.map((code_block, i) => <Segment key={i}>{code_block.description}</Segment>)}
              </Segment.Group>
            }
            {example.steps && <p>{example.steps}</p>}
            {example.source && <Button basic size='tiny' color='teal' href={example.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default App
