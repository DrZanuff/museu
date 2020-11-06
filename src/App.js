import React from 'react';
import './App.css';
import MainPage from './pages/main';
import ArtworkPage from './pages/artwork';

const Theme = React.createContext("light")


function App() {
  const [page,setPage] = React.useState("Art")
  const btnClick = () =>{
    setPage("Main")
  }
  return (
    <Theme.Provider value="light">
      <div className="App">
        { page == "Main" && <MainPage fc={btnClick}></MainPage>}
        { page == "Art" && <ArtworkPage setPage={setPage} ></ArtworkPage>}
      </div>
    </Theme.Provider>

  );
}

export default App;
