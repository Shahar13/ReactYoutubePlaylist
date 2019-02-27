
import React, {Component } from 'react';


class Lyrics extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 
        //     displayMode: false,
        // }
        // this.openLyrics = this.openLyrics.bind(this);
        // this.closeLyrics = this.closeLyrics.bind(this);
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

    // openLyrics() {
        // document.querySelector('.lyrics').style.display = 'block';
    // }

    // closeLyrics(elm) {
    //     console.log('WWWWWWWWWWWWWW');
        // let that = elm;
        // console.log(elm);
        // this.setState({displayMode: 'none'});
        // document.querySelector('.lyrics').style.display = this.state.displayMode;    
    // }

    render() {
        console.log(this.props.isShow)
       
        return (
            <div>
            {this.props.isShow?
            <div className="lyrics">
                {/* LYRICS */}

                {/* <div onClick={this.closeLyrics} style={{dispaly: `${this.state.displayMode}%`}} className="btn_close_lyrics"> */}
                {/* <div onClick={this.closeLyrics} className="btn_close_lyrics"> */}
                <div onClick={()=>this.props.closeLyrics()} className="btn_close_lyrics">
                    X
                </div>
                <br clear="all" />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
                <br />
                test teaesr asalfkha fa;sjf aksjfaskf asf as;fjkas 
                <br />
                d;fkjas ;fkjas dfkhga slfhgc aslfig sldfgsldf g
            
            </div>
            :
            <div />
            }
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

export default Lyrics;

