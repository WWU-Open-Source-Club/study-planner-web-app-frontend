import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import {CalendarViewWindow} from './Calendar.js'
import img_searchbar from './assets/prototype/search-bar-prototype.png';
import img_magnifier from './assets/prototype/magnifying-glass-prototype.png';
import {ToDo} from './ToDo.js'
import {SearchBar} from './SearchBar.js';
import {Statistics} from './Statistics.js';
import {NotifButton} from './Notifications.js';


// The top portion of the screen (Search Bar and Notifications Toggle).
class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <SearchBar />
          <NotifButton />
        </div>
    )
  }
}


// For the main body of the app (The ToDo List and Calendar).
class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        <ToDo />
        <CalendarViewWindow />
      </div>
    )
  }
}

// The bottom portion of the screen.
class Footer extends React.Component {
  render() {
    return(
      <div className="Footer">
        <Statistics />
      </div>
    )
  }
}



// The Main App Function, render functions branch out from here.
function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
