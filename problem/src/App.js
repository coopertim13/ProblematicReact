import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const units = [
  {code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
  {code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
  {code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
  {code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
  {code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
  {code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
  {code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
]

const Unit = ({unit}) => {
  const [title, setCase] = useState(unit.title)

  const goUp = () => setCase(String(title).toUpperCase())
  const goDown = () => setCase(String(title).toLowerCase())

  return (
    <div>
      <span>{unit.code} - {title}: {unit.offering}</span>
      <button onClick={goUp}>
        Up
      </button>
      <button onClick={goDown}>
        Down
      </button>
    </div>
  )
}

const App = ({units}) => {
  return (
    <div>
      <ul>
        {units.map(unit =>
          <Unit key={unit.code} unit={unit}/>
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App units = {units}/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
