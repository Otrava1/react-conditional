import { useState, useEffect } from 'react';
import './style.css';
import { UserList } from './components/UserList';
import { ScrollInfo } from './components/ScrollInfo';

// Declaram o variabila in functie de care decidem daca afisam butonul de login
const isLoggedIn = true

// Atribuim un array de useri unei constante
const staticUsers = [
  {
    name: 'Octavian Darius',
    email: 'ocatvian.darius@gmail.com',
    marketValueTrend: 'same',
    isNew: true,
  },
  {
    name: 'Eduard Lavinia',
    email: 'eduard.lavinia@gmail.com',
    marketValueTrend: 'up',
    isNew: false,
  },
  {
    name: 'Sanda Cosmin',
    email: 'sanda.cosmin@gmail.com',
    marketValueTrend: 'down',
    isNew: false,
  },
];

export default function App() {
  const [color, setColor] = useState('#ffffff');
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  // Daca nu specific al 2-lea parametru, atunci functia din useEffect imi va fi apelata de fiecare data cand se randeaza componenta
  // !!!! De obicei nu dorim sa facem asta, adica sa punem un useEffect fara al 2lea parametru pentru ca putem cauza erori 
  // useEffect(() => {
  //   console.log('Componenta App a fost randata')
  // })
  // Sa spunem ca vrem sa ascultam la state-ul de color si cand se schimba sa se execute un console.log -> Daca vreau sa rulez efecte doar atunci cand o bucata de state se schimba, trebuie sa pun acel state in array-ul de dependinte

  useEffect(() => {
    console.log('culoarea s-a schimbat')
  }, [color])

  function handleColorChange(event) {
    const newColor = event.target.value;
    setColor(newColor);
  }
  function handleToggleDropdown() {
    setIsDropdownDisplayed(!isDropdownDisplayed);
  }

  let dropdownClasses = 'dropdown-list';
  if (isDropdownDisplayed) {
    dropdownClasses += ' is-displayed';
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <input type="color" onChange={handleColorChange} />
      <div>
        <button onClick={handleToggleDropdown}>Arata optiuni</button>
        <ul className={dropdownClasses}>
          <li>Optiune 1</li>
          <li>Optiune 2</li>
        </ul>
      </div>
      {/* Folosim operatorul ternar pentru a decide daca afisez butonul cu login sau logout - vom folosi conditia de tip if-else direct in HTML */}
      {isLoggedIn ? (<button onClick={() => {console.log('delogare')}}>Delogheaza-te</button>) : (<button onClick={() => {console.log('logare')}}>Logheaza-te</button>) }
      {/* Daca isDropdownDisplayed este true, atunci imi va fi montata componenta ScrollInfo */}
      {isDropdownDisplayed && <ScrollInfo />}
      {/* Instantiez componenta UserList care imi va randa UserItem in functie de array-ul primit */}
      <UserList users={staticUsers} />
    </div>
  );
}
