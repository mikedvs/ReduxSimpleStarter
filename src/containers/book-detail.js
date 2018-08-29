import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        book: state.activeBook
    }
}

 class Bookdetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Bookdetail)