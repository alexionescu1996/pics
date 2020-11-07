import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    handleSubmitForm = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    // == fix 1 ==
    // handleSubmitForm = (event) => {
    //     event.preventDefault();

    //     console.log(this.state.term);
    // };

    // == fix 2 ==
    // <form className="ui form" onSubmit={(event) => this.handleSubmitForm(event)}>

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmitForm}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;