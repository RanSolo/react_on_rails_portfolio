import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addExample } from '../actions/exampleActions';

class ExampleModal extends Component {
  state = {
    modal: false,
    title: '',
    description: '',
    steps: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.title]: e.target.value,
                    [e.target.description]: e.target.value,
                    [e.target.steps]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newExample = {
      title: this.state.title,
      description: this.state.description,
      steps: this.state.steps
    }

    // Add example via addExample actions
    this.props.addExample(newExample)

    // Close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="success"
          style={{marginBottom: '1rem'}}
          onClick={this.toggle}
          >+
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add New Example</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  title="title"
                  id="example"
                  placeholder="Add title"
                  onChange={this.onChange}
                />
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  description="description"
                  id="example"
                  placeholder="Add description"
                  onChange={this.onChange}
                />
                <Label for="steps">Steps</Label>
                <Input
                  type="integer"
                  description="steps"
                  id="example"
                  placeholder="How many steps"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '1rem'}}
                  block
                  >Add Example
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  example: state.example
});

export default connect(mapStateToProps, { addExample })(ExampleModal);
