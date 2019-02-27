import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SinglePlayer from './components/SinglePlayer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <header>
            <div className="">
              <Link to={`/`}>
                HOME
              </Link>
                
              <div className="btn_add_video" title="Add New Video"> Add New Video </div>

            </div>
            {/* <div className='menuItem'>
                <Link to={`/pages/1`}>
                  page 1
                </Link>
              </div> */}

          </header>

          <div className='grid-container'>
            {/* Single Player  */}
            <SinglePlayer />
            <SinglePlayer />
            <SinglePlayer />
            <SinglePlayer />
            <SinglePlayer />
            <SinglePlayer />
            {/* End Of Single Player */}
            
            {/* <h1>Hello</h1> */}
            {/* TOP PART */}
            {/* <Route exact={true} path='/' component={Home} /> */}
            {/* <TopPart component={TopPart} />  */}

            {/* BOTTOM PART */}
            {/* <Route path='/admin/:id' component={RegistrationModule} /> */}
            {/* <Route path='/user/:id' component={ClientModule} /> */}
            {/* <BottomPart component={BottomPart} />  */}
            {/* ########################################## */}
            {/* <ManagerPage /> */}
            {/* <RegistrationModule Component={RegistrationModule} /> */}
            {/* <ClientModule Component={ClientModule} /> */}
            {/* <UserPage /> */}

          </div>
          {/* End of Grid Container */}

        </div>
        {/* End of Router DIV */}
      </Router >

    );
  }
}

export default App;
