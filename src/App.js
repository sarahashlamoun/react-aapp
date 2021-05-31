import REACT from "react";
import './App.css';
import Busy from "./video.busy.mp4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <video src={Busy} autoplay loop type="video/mp4"></video>
          <h1> 
         Rainbow 
          </h1> 
      </header>
    </div>
  
  );
}



export default App;
