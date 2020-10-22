import {SlideSwitch} from './VizUtilities';
import React from 'react';
export {NotifButton};

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
