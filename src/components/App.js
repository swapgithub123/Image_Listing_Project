import React from 'react';
import axios from 'axios';   //after installing axios pkg through npm(npm install --save axios)
import SearchInput from './SearchInput';
import ImageList from './ImageList';

//functional based component
// const App = () => {
//     return (
//         <div className='ui container' style={{marginTop:'30px'}}>
//             <SearchInput />
//         </div>
//     )
// }


class App extends React.Component{

    state = {images:[]};  //state is an object ,empty array because map function will be used that is built in Javascript

    onSearchSubmit = async (entry) => {
        // console.log(entry)
    const response = await axios.get(`https://pixabay.com/api/?key=20962155-ceb6dbd54bdbf3c665b9df040&q=${entry}&image_type=photo&pretty=true`); //To add dynamic entry, use string literal property of ES2015
    console.log(response.data.hits);
    this.setState({images:response.data.hits});
    }
    render(){
        return(
            < div className='ui container' style={{marginTop:'30px'}}>
                       <SearchInput onSearchSubmit={this.onSearchSubmit} /> {/* onSearchSubmit will be passeddown to SearchInput component as a PROPS */}
                       <ImageList images={this.state.images}/>    {/* Its a component*/}
                </div>
        )
    }
}


export default App;

//for exporting