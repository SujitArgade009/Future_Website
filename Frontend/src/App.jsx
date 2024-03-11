import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Content from "./components/Contain/Content.jsx";

function App() {
  let heroData=[
    {text1:"Dive Into", text2:"What you Love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"Your passions"},
  ]
  const [heroCount, setHeroCount]=useState(2);
  const [playStatus, setPlayStatus]=useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2 ? 0: count+1})
    }, 3000);
  },[])


  return (
    <div>
      <Header playStatus={playStatus} heroCount={heroCount}/>
      <Footer />
      <Content 
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      />
    </div>
  );
}

export default App;
