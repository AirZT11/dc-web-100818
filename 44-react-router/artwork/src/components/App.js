import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About.js'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: '',
        selectedPainting: null
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (event) => {
    let paintingId = event.target.dataset.paintingId
    let selectedPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
    this.setState({
      selectedPainting: selectedPainting
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch >
          <Route path='/paintings/:id' render={(props) => {
            let paintingId = props.match.params.id
            return <PaintingDetails painting={this.state.paintingsList.find(p => p.id === paintingId)}/>
          }} />
          <Route path='/paintings' render={() => <PaintingsList
              onSearchHandler={this.onSearchHandler}
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
              onSelectPainting={this.onSelectPainting}
            />
          } />
          <Route component={About} />
        </Switch>
      </div>
    );
  }
}

/*

*/

export default App;
