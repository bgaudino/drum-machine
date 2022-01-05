import "./App.css";
import React from "react";
import padData, { keys } from "./padData";

const styles = {
  drumMachine: {
    display: "block",
    borderRadius: "10px",
    backgroundColor: "#afafaf",
    width: 300,
    padding: 20,
    margin: 0,
  },
  display: {
    fontSize: 20,
    height: 60,
    marginBottom: 20,
    textAlign: "center",
    verticalAlign: "middle",
    border: "8px inset #afafaf",
    backgroundColor: "#000",
  },
  pads: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    height: 300,
  },
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (keys.includes(e.key)) {
      const pad = document.getElementById(e.key);
      pad.click();
      pad.focus();
    }
    for (let i = 0; i < padData.length; i++) {
      if (padData[i].key === e.key) {
        this.setState({
          display: padData[i].display,
        });
        break;
      }
    }
  }

  playSound(e) {
    for (let i = 0; i < padData.length; i++) {
      if (padData[i].key === e.target.value) {
        new Audio(padData[i].note).play();
        this.setState({
          display: padData[i].display,
        });
      }
    }
  }

  render() {
    const pads = padData.map((obj) => (
      <button
        id={obj.key}
        onClick={this.playSound}
        value={obj.key}
        style={{
          color: "white",
          backgroundColor: obj.color,
          fontSize: "32px",
          borderRadius: "8px",
        }}
      >
        {obj.key}
      </button>
    ));

    return (
      <div style={styles.drumMachine}>
        <div style={styles.display}>
          <p>{this.state.display}</p>
        </div>
        <div style={styles.pads} onKeyDown={this.handleKeyDown}>
          {pads}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
