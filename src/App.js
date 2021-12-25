import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super()
    this.state = {
      searchstring: '',
      monsters: [
        { name: 'picacho', id: 1, email: 'picacho@lestar.com' },
        { name: 'franckshtain', id: 2, email: 'francky@gmail.com' },
        { name: 'redwing', id: 3, email: 'redwing@gmail.com' },
      ],
    }
  }
  handleChange = (e) => {
    this.setState({ searchstring: e.target.value })
  }
  render() {
    const { monsters, searchstring } = this.state
    const filtredmonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchstring.toLowerCase())
    )
    return (
      <div className="App">
        <h1>monstersgo</h1>
        <SearchBox
          placeholder="search for a monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filtredmonsters} />
      </div>
    )
  }
}

export default App
