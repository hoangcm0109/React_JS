import './App.css';
import Content from './components/Content';
import Home from './components/Home'
import Timer from './components/Timer'
import Cleanup from './components/Cleanup'
import Chat from './components/Chat'
import Clickbutton from './components/Clickbutton'
import UseRef from './components/UseRef';

import { useState } from 'react';



// const phones = [
//   {
//     id: 1,
//     name: 'Iphone'
//   },
//   {
//     id: 2,
//     name: 'Samsung'
//   },
//   {
//     id: 3,
//     name: 'Oppo'
//   },
//   {
//     id: 4,
//     name: 'Xiaomi'
//   }
// ]


function App() {

  // const [ checked, setchecked ] = useState([])
  const [ show, setShow ] = useState(false)

  // console.log(checked);


  // const handleCheck = (id) => {
  //   // console.log(id);
  //   setchecked(prev => {
  //     const isChecked = checked.includes(id)
  //     // console.log(isChecked);
  //     if(isChecked) {
  //       return checked.filter(item => item !== id)
  //     } else {
  //       return [...prev, id]
  //     }
      
  //   })
  // }

  // const handleSubmit = () => {
  //   console.log({ids: checked});
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        {phones.map(phone => (
          <div key={phone.id}>

            <input
              id={phone.id}
              type="checkbox" 
              checked={checked.includes(phone.id)}
              onChange={() => handleCheck(phone.id)}
            />

            <label htmlFor={phone.id}>{phone.name}</label>
          </div>
        ))}
        <h1>{checked}</h1>

        <button className="App-btn" 
          onClick={handleSubmit}
        >
          Click Me!
        </button>

        <img src={logo} className="App-logo" alt="logo" />
  
        
      </header> */}

      {/* <button
        onClick={() => {
          setShow(!show)
        }}
      >Click show</button> */}

      {/* {show && <Home />} */}
      {/* {show && <Timer />} */}
      {/* {show && <Content />} */}
      {/* {show && <Cleanup />} */}
      {/* {show && <Chat />} */}

      {/* {show && <UseRef />} */}

      <Clickbutton />

    </div>
  );

    
}

export default App;
