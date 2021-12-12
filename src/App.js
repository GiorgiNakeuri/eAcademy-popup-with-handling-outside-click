import "./App.css";
import { PopUp } from "./popup";
import { useState } from "react";

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleClose = () => setIsPopUpOpen(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsPopUpOpen(true);
        }}
      >
        open pop-up
      </button>
      {isPopUpOpen && (
        <PopUp
          text="Pop up text"
          handleClose={handleClose}
          handleClickOutside={handleClose}
        />
      )}
    </div>
  );
}

export default App;
