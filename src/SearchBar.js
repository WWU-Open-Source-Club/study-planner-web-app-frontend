import React from 'react';
export {SearchBar};


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
