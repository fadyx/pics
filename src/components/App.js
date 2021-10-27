import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://dog.ceo/api/breed/hound/images");
    const results = response.data.message;
    console.log(Math.random() * (100 - 10) + 10);
    let filtered;
    if (results.length > 1)
      filtered = results
        .sort(() => 0.5 - Math.random())
        .splice(0, Math.random() * (100 - 10) + 10);

    this.setState({ images: filtered });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
