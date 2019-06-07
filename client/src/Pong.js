import React from "react";

class Pong extends React.Component {
  ws = new window.WebSocket(
    process.env.REACT_APP_WEBSOCKET_URL || `ws://${window.location.host}`
  );

  componentDidMount() {
    fetch("/ping")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(pong => {
        console.log(pong);
      });

    this.ws.onopen = () => {
      console.log("Websocket connected");
    };

    this.ws.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log("Websocket received message:", message);
    };
  }

  render() {
    return <div>Greetings from Pong component!</div>;
  }
}

export default Pong;
