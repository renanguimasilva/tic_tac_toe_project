import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  //let btnCaption = 'Edit'

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    //btnCaption = 'Save'
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span>
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
