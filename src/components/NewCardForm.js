import React from 'react'
import Button from './Button'
import Input from './Input'

class NewCardForm extends React.Component {
  state = {
    front: '',
    frontTags: '',
    back: '',
    backTags: '',
  }

  handleFieldChange = (event) => {
    const { id, value } = event.target
    this.setState(prevState => ({ [id]: value }))
  }

  render() {
    return (
      <div>
        <Input
          id="front"
          label="Front Value"
          onChange={this.handleFieldChange}
          value={this.state.front}
        />
        <Input
          id="frontTags"
          label="Front Tags"
          onChange={this.handleFieldChange}
          value={this.state.frontTags}
        />
        <Input
          id="back"
          label="Back Value"
          onChange={this.handleFieldChange}
          value={this.state.back}
        />
        <Input
          id="backTags"
          label="Back Tags"
          onChange={this.handleFieldChange}
          value={this.state.backTags}
        />
        <Button>Save</Button>
      </div>
    )
  }
}

export default NewCardForm
