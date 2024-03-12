import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Content from "./components/Contain/Content.jsx";
import axios from 'axios';

function App() {
  let heroData=[
    {text1:"Dive Into", text2:"What you Love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"Your passions"},
  ]
  const [heroCount, setHeroCount]=useState(2);
  const [playStatus, setPlayStatus]=useState(false);
  const [data, setdata]=useState(null);

  async function fetchData(){
    try{
      const response=await axios.get("http://localhost:5000/api/cars");
      const jsonData=await response.json();
      console.log(response);
      setdata(jsonData);
    }catch(err){
      console.log("ERROR in Fetching the data"+ err);
    }
  }

  useEffect(() => {
    fetchData();
}, []);

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
      <div>
        {data ? <p>{data.message}</p>:<p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
