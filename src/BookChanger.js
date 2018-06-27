import React from 'react'
import PropTypes from 'prop-types'
class BookCharger extends React.Component {
	static propTypes = {
		bookObj: PropTypes.object.isRequired,
		changeShelf: PropTypes.func.isRequired,
		currentShelf: PropTypes.string.isRequired
	}
	render(){
		const bookObj = this.props.bookObj
		let changeShelfTo = 'none';
		return (
			<div className="book-shelf-changer">
				<select
					onChange={
						(event) => this.props.changeShelf(bookObj, event.target.value)
					}
					defaultValue={ changeShelfTo }>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
				</select>
			</div>
		)
	}

}

export default BookCharger
