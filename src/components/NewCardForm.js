import React from 'react'
import Button from './Button'
import Input from './Input'

const allDefined = (values) =>
  !Object.keys(values).some(key => !values[key])

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

  handleSaveClick = () => {
    console.log('woo!')
  }

  get values() {
    return {
      front: this.state.front.trim(),
      frontTags: this.state.frontTags.trim(),
      back: this.state.back.trim(),
      backTags: this.state.backTags.trim(),
    }
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
        <Button onClick={this.handleSaveClick} disabled={!allDefined(this.values)}>Save</Button>
      </div>
    )
  }
}

export default NewCardForm
