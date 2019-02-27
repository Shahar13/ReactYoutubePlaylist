
import React, {Component } from 'react';
import Lyrics from './Lyrics';


class SinglePalyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect: false, 
            username: "Username", 
            password: "",
            garbageState: "",
            isShow: false,
        }
        this.openLyrics = this.openLyrics.bind(this);
        this.closeLyrics = this.closeLyrics.bind(this);
    }
    // renderRedirect() {
    //     console.log("renderRedirect");
    //     if (this.state.redirect) {
    //         return <Redirect method="post" to={"/parentsData2/" + this.state.username}></Redirect>
    //     } else {
    //         return (
    //            <a href="#"><div className="loginSubmit" onClick={this.loginHandler} >login</div></a>
    //         )
    //     }
    // }

    openLyrics() {
        // document.querySelector('.lyrics').style.display = 'block';
        this.setState({isShow:true})
    }
    closeLyrics() {
        this.setState({isShow:false})
    }       
    

    render() {
        return (
            <div className="single_player">
              <iframe className="player" 
                src="https://www.youtube.com/embed/aatZ9VSF7Mc" 
                frameBorder="0" 
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
              <br />
              {/* controlls  */}
              <div className="flex_controllers">
                <div title="Delete Video"> - </div>
                <div title="Update Video">Update</div>
                <div onClick={()=>{this.openLyrics()}} title="Add Lyrics">+ Lyrics</div>
              </div>
              
              <Lyrics isShow={this.state.isShow} closeLyrics={this.closeLyrics}/>

            </div>
        )
    }
}


// const login = ({ match }) => {

//     return (
//         <div>
//             <Login />
//         </div>
//     )
// }

export default SinglePalyer

