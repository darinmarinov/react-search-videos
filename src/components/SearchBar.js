import React from 'react';

class SearchBar extends React.Component{

    state = { term: 'search for videos'}

    onInputChange = e => {
       this.setState({term: e.target.value})
    }

    onFormSubmit = e => {
       e.preventDefault();
       this.props.onFormSubmit(this.state.term)  
    }

    onClearSearchBar = () => {
        this.setState({term: ''})
    }

    render(){
        return(
            <div className="search-bar ui segment">
              <form className="ui form" onSubmit={this.onFormSubmit}> 
                  <div className="field">
                      <label>Video Search</label>
                      <input type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        onFocus={this.onClearSearchBar}
                        />
                  </div>
              </form>
            </div>
        )
    }
}

export default SearchBar;