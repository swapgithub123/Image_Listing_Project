import React from 'react';


//Use a class-based component as we will use state to handle user inputs.

class SearchInput extends React.Component {
    // constructor() {
    //     super()

    //     this.onFormSubmit=this.onFormSubmit.bind(this)
    // }


    state= {entry:''};

    onFormSubmit=(event)=> {
      event.preventDefault()
      this.props.onSearchSubmit(this.state.entry);
      console.log(this.state.entry)
    }

    render(){
        return(
            <div className='ui segment'>
              <form onSubmit={this.onFormSubmit} className="ui form" action="">
                  <div className='field'>
                      <div className='ui massive icon input'>
                          <input type='text' placeholder='search'
                           onChange={(addEventListener)=>this.setState({entry:addEventListener.target.value})}
                           value={this.state.entry}/>     {/*when user types anthing in search box,onChange event gets called */}
                          <i className="search icon"></i>
                      </div>
                  </div>
             </form>
           </div>
        )
    }
}

export default SearchInput;




