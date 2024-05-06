// import LoginForm from './components/LoginForm';
import './App.css'
import {useEffect, useState} from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  let heroData = [
    { text1: "Col 1", text2: "Col 1 Content" },
    { text1: "Col 2", text2: "Col 2 Content" },
    { text1: "Col 3", text2: "Col 3 Content" }
  ];

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);

  }, []);


  return (
    <div>
      {/* <LoginForm /> */}
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
      setPlayStatus={setPlayStatus}
      setHeroCount={setHeroCount}
      heroData={heroData}
      heroCount={heroCount}
      playStatus={playStatus} />

    </div>
  )
}

export default App;
