import React from 'react'
import './App.css'
import Search from './Search'
import MainBookScreen from './MainBookScreen'

class BooksApp extends React.Component {
	state = {
	  showSearchPage: false
	}
  render() {
	return (
	  <div className="app">
		{this.state.showSearchPage ?
			<Search /> :
			<MainBookScreen />}
		<div className="open-search">
		  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
		</div>
	  </div>
	)
  }
}


export default BooksApp
