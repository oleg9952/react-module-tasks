import React, { Component } from 'react'
import './App.scss';
import Controls from './components/Controls/Controls';
import Modal from './components/Modal/Modal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      showModal: false
    }
  }

  handleSelection = value => {
    this.setState({
      selection: value.toLowerCase(),
      showModal: true
    })
  }

  handleCloseModal = () => this.setState({ selection: null, showModal: false });

  render() {
    const { selection, showModal } = this.state;

    return (
      <div className="App">
        <Controls 
          handleSelection={this.handleSelection}
          selection={selection}
        />
        {selection && showModal && (
          <Modal 
            selection={selection} 
            handleCloseModal={this.handleCloseModal} 
          />
        )}
      </div>
    )
  }
}

export default App
