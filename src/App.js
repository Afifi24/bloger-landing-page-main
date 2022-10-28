import React,{useState} from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
function App() {

  const [isopen,setisopen] = useState(false)
  return (
    <div className="App">
    <Header
    isopen ={isopen}
    setisopen={setisopen}
    />
     <Container/>
     <Footer/>
    </div>
  );
}

export default App;
