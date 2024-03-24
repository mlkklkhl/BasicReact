import './App.css';

import Header from './Components/Header';
// import Body from './Components/Body';
import Footer from './Components/Footer';
import Read from './Components/Read';
import Auth from "./Components/Auth";

function App() {

  const { auth } = Auth();

  return (
    <div className="App">
      <Header />
      {/* <Body /> */}
      { auth && 
        <Read />
      }
      <Footer />
    </div>
  );
}

export default App;
