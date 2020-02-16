import React, { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    //console.log("printing ids:::", ids);
    const max_id = ids.lenght > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: max_id + 1 });
    this.setState({ gifts });
  };

  render() {
    //console.log(this.state.gifts);
    return (
      <div>
        <h2>gift giver</h2>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return <div key={gift.id}></div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
