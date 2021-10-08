import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Color from './components/Color';



const App = () => {

  const [colorbox , setColotock] = useState([]);

  const [buttons] = useState([
    {id:1 , color: "red"},
    {id:2 , color: "green"},
    {id:3 , color: "blue"},
    {id:4 , color: "purple"},
    {id:5 , color: "yellow"},
    {id:6 , color: "Black"}
  ]);

  const addBox = (color) => {
    setColotock ([...colorbox, { color : color}])
  }

  const deleteBox = (id) => {
    setColotock((colorbox) => {
      const newColors = [...colorbox];      
      newColors.splice(id, 1);
      return newColors;
    })
  }

  return (
    <div className="AppMain">
      <div className="">
        {colorbox.length > 0 ? (
          colorbox.map ((colorsingle , id) => (
            <Color key={id} id={id} onClick={deleteBox} bg={{backgroundColor: colorsingle.color , color: colorsingle.color}} />
          ))
        ) : (
          <div className="instruction">
            <h1>Please click on colors to add </h1>
          </div>
        )
        }        
        {}
      </div>
      <div className="">
        {buttons.map ((button) => (
          <Buttons key={button.id} id={button.id} color={button.color} onClick={addBox}/>
        ))}       
      </div>
    </div>
  );
}

export default App;
