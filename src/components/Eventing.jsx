import React from "react";

const Eventing = () => {
  /*
Events are actions that are being taken by our users on our website. e.g clicking(click) of a 
button, mousing over an element(mouseover), pressing down a key(keydown) etc.
Events handlers are those functions that we attach to an event.
EventListeners also manage events but with a differnet syntax. EventListeners can handle
events on the fly. And we can attach more than one event handlers to one element using 
evenlistener
    */
  const greet = function () {
    alert("Good day");
  };
  const add = function (...n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n[i];
    }
    alert(sum);
  };
  return (
    <div>
      <h1>Hello Events</h1>
      <button className="btn btn-primary" onClick={greet}>
        Greet
      </button>
      <button className="btn btn-danger" onClick={() => add(2, 3, 4, 6, 7, 8)}>
        Sum
      </button>
    </div>
  );
};

export default Eventing;
