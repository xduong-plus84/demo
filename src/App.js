import logo from "./logo.svg";
import "./App.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(false);

  const handlePickEmoji = (e) => {
    console.log("e: ", e);
    setValueInput((currentVal) => currentVal + e.emoji);
    setIsOpenEmojiPicker((currentStatus) => !currentStatus);
  };
  return (
    // <div>
    <div style={{ display: "flex", margin: "200px", position: "absolute" }}>
      <div>
        {isOpenEmojiPicker && (
          <EmojiPicker
            style={{ position: "relative", bottom: 0, left: 0 }}
            onEmojiClick={(e) => handlePickEmoji(e)}
          />
        )}
        <input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button
          onClick={() =>
            setIsOpenEmojiPicker((currentStatus) => !currentStatus)
          }
        >
          Click here
        </button>
      </div>
      <h1>Chose: {valueInput}</h1>
    </div>
  );
}

export default App;
