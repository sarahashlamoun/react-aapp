import REACT from "react";
import './App.css';
import Busy from "./video.busy.mp4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <video src={Busy} autoplay loop type="video/mp4"></video>
        <div class="overlay">
          <h1> 
         Rainbow 
          </h1> 
<form action="https://www.google.com/" >
<div id="btn"><span class="noselect">Hello</span><div id="circle"></div>
  </div>
   </form>

   </div>
      </header>
    </div>
  );
}

    


export default App;
