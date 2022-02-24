
import React from "react";
import Text from "./components/Text";

import memeData from "./meme-data";

import "./App.css";

export default function App() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: memeData.data.memes[0].url,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function updateImage() {
    const randomIndex = Math.floor(Math.random() * memeData.data.memes.length);
    setMeme(prevState => ({
      ...prevState,
      image: memeData.data.memes[randomIndex].url
    }));
  }

  return (
    <div className="proj3 App">
      <h1 className="App--header">Meme Generator</h1>
      <div className="form">
        <Text className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          change={handleChange} />

        <Text className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          change={handleChange} />

        <button className="form--ok" onClick={updateImage}>Change Image</button>
      </div>
      <div className="meme">
        <img src={meme.image} alt="meme" />
        <h1 className="meme--top">{meme.topText}</h1>
        <h1 className="meme--bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
}