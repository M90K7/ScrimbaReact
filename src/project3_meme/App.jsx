
import React from "react";
import Text from "./components/Text";

import memeData from "./meme-data";

import "./App.css";

export default function App() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "",
  });

  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemes(data.data.memes);
    })();
  }, []);

  React.useEffect(() => {
    memes.length && updateImage();
  }, [memes]);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function updateImage() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setMeme(prevState => ({
      ...prevState,
      image: memes[randomIndex].url
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
      {
        meme.image && <div className="meme">
          <img src={meme.image} alt="meme" />
          <h1 className="meme--top">{meme.topText}</h1>
          <h1 className="meme--bottom">{meme.bottomText}</h1>
        </div>
      }
    </div>
  );
}