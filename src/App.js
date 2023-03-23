import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    // TODO: Retrieve saved name from session storage
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveButtonClick = () => {
    // TODO: Save name to session storage
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSaveButtonClick}>Save</button>
      {savedName && <p>Saved name: {savedName}</p>}
    </div>
  );
}

export default App;
