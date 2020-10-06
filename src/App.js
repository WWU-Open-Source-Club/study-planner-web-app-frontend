import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import img_searchbar from './assets/prototype/search-bar-prototype.png';
import img_magnifier from './assets/prototype/magnifying-glass-prototype.png';


class SlideSwitch extends React.Component {
  render() {
    return (
      <label class="switch">
        <input type="checkbox" onClick={() => this.props.onClick()} />
        <span class="slider round"></span>
      </label>
    )
  }
}



// The search bar.
class SearchBar extends React.Component {
  render() {
    return (
      <div className="Search-Bar">
          <button className="Search-Button" type="button"></button>
          <input className="Search-Input" type="text" placeholder="Search..." />
        </div>
    );
  }
}

// The button for toggling notifications.
class NotifButton extends React.Component {
  render() {
    return (
      <div className="Notif-Button">
          <div>
            <h1>Notification</h1>
          </div>
          <SlideSwitch />
        </div>
    );
  }
}

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



// For displaying individual events on the schedule.
class ScheduleEvent extends React.Component {
  render() {
    return null;
  }
}

// For a Schedule View.
class ScheduleView extends React.Component {
  render() {
    return (
      <div className="Schedule-View"></div>
    );
  }
}


// For displaying individual events on the calendar.
class CalendarEvent extends React.Component {
  render() {
    return null;
  }
}

// For all Calendar grid boxes.
class CalendarDay extends React.Component {
  render() {
    return null;
  }
}

// FOr a Calendar View.
class CalendarView extends React.Component {
  render() {
    return (
      <div className="Calendar-View"></div>
    );
  }
}


// To contain and toggle between Calendar and Schedule Views.
class CalendarViewWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarView: true,
    };
  }

  swapViews() {
    this.setState({calendarView: !this.state.calendarView});
  }

  render() {
    const view = this.state.calendarView ? <CalendarView /> : <ScheduleView />;

    return (
      <div className="Calendar-Window">
        {view}
        <SlideSwitch onClick={() => this.swapViews()} />
      </div>
    )
  }
}


// For all the items contained in the ToDo list.
class ToDoItem extends React.Component {
  render() {
    return null;
  }
}

// The ToDo list.
class ToDo extends React.Component {
  render() {
    return null;
  }
}


// For the main body of the app (The ToDo List and Calendar).
class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        <CalendarViewWindow />
      </div>
    )
  }
}



// For things like bar graphs, or other useful info.
class Statistics extends React.Component {
  render() {
    return null;
  }
}

// The bottom portion of the screen.
class Footer extends React.Component {
  render() {
    return null;
  }
}



// The Main App Function, render functions branch out from here.
function App() {
  return (
    <body className="App">
        <Header />
        <Body />
        <Footer />
    </body>
  );
}

export default App;
