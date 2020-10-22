import React from 'react';
import {SlideSwitch} from './VizUtilities';
export {CalendarViewWindow};

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
