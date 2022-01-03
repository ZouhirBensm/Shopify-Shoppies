import React from 'react'
import './Style.css';
import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import _ from "lodash";
import ls from 'local-storage';

function Unit({ truc, index, QuesButton, add, deleteFunc}) { return (
    <li className="Card">
      <img className="img" src={truc.Poster} alt="movie poster"></img>
      <p className="header-sub">{truc.Year} {truc.Title}</p>
      { !add ?             
        <button onClick={()=> deleteFunc(index)}>Un-Nominate</button>
        : 
        <button disabled={QuesButton(truc)} onClick={()=> add(truc)}>Nominate</button> }
    </li> )
}

function App() {
  const [search, setS] = useState('')
  const [nominee, setNo] = useState([])
  const [Datareturned, setR] = useState([])
  

  const sendQ = async q => {
    let api = await axios.get(`//www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${q}`)
    setR(api.data.Search)
  };
  // eslint-disable-next-line
  const yQ = useCallback(_.debounce(q => sendQ(q), 500), []);

  const QuesButton = (truc) => {
    return nominee && (nominee.includes(truc) || nominee.length >= 5)
  }

  const deleteFunc = (index) => {
    let silver = [...nominee]
    if (index !== -1) {
      silver.splice(index, 1);
        setNo(silver);
        ls.set('nominee', silver);
    }
  }

  const add = (truc) => {
    if (!nominee || nominee.length === 0) {
      setNo([truc])
      ls.set('nominee', [truc]);
    } else {
      let jdid = [...nominee, truc]
      setNo([...nominee, truc])
      ls.set('nominee', jdid);
    }
  }
  useEffect(() => {
    let groupOfNom = ls.get('nominee');
    setNo(groupOfNom)
  }, [])

  const ForSearchcontroller = (e) => {
    setS(e.target.value)
    yQ(e.target.value)
  }

  return (
    <div className="a-container">
      <div className="under">
        <img className="shop" src="https://cdn.betakit.com/wp-content/uploads/2015/04/shopify-ipo-blog-banner.png" alt="Shopify"/>
        <h2 className="rass" >The Shoppies</h2>
        <div className="within">
          <input className="inputFF" label=" 🔎  Search..." value={search} placeholder=" 🔎  Search..." onChange={ForSearchcontroller}/>
        </div>
        { search ?
          <div className="HH1">
            <h3 className="HH2">YOU JUST SEARCHED: "{search}"</h3>
          </div> 
        :
        null }
  
        <div className="suite">
        <ol className="a-droite">
          { Datareturned ? 
            Datareturned.map((truc, index) => { return (
                <li>
                  <Unit add={add} index={index} QuesButton={QuesButton} key={index} truc={truc}/>
                </li>
              ) }) 
            :
            <div>
              Empty..
            </div> }
        </ol>
        <ul className="Gauu">
          { (!nominee || nominee.length ===0) ? 
            <div>
              Please search and select.
            </div> :
            nominee.map((truc, index) => { return (
                <li>
                  <Unit QuesButton={QuesButton} truc={truc} key={index} deleteFunc={deleteFunc} index={index}/>
                </li> )
            }) }
          { (nominee!==null && nominee.length >= 5) ?         
              <div className='end'>
                <h1>You are finished selecting your 5 nominee's. You can change it if you wish</h1>
              </div> 
          : null }
        </ul>
        </div>
      </div>
      
    </div> );}

export default App;
