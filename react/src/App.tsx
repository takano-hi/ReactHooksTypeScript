import React, { useState, useEffect, useContext } from 'react';
import './App.css';

const LangContext = React.createContext('ja');

const Child: React.FC = () => {
  const value = useContext(LangContext);
  return <h3>{value}</h3>;
};

const App: React.FC = () => {
  const [{ num }, setClick] = useState({ num: 3 });
  useEffect(() => {
    const handler = () => {
      document.title = `${window.innerWidth}`;
    };
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  });

  const [lang, setLang] = useState('ja');

  return (
    <>
      <div>
        <LangContext.Provider value={lang}>
          <input type="text" placeholder="Keyword" />
          <div>{num}</div>
          <button onClick={() => setClick({ num: num + 1 })}>increment</button>
          <Child />
          <select name="lang" id="lang" onChange={e => setLang(e.target.value)}>
            <option value="ja">JAPANESE</option>
            <option value="en">ENGLISH</option>
          </select>
        </LangContext.Provider>
      </div>
    </>
  );
};

export default App;
