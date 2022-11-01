import './App.css';
import { useState } from 'react';

function App() {

  let [lista , setLista] = useState(["Wake up","Take a shit","Eat","Get out of bed","Have breakfast"]);
  let [novoItem, setNovoItem] = useState("");

  return (

    <>
   <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>
   <button onClick={() => adicionarNovoItem() }>Adicionar</button>
   <ul>
      {lista.map((item, index) => (
      <li>
        {item}
        <button onClick={() => deletarItem(index)}>
          ✔
        </button>
      </li>
      ))}
   </ul>
   </>
  );

  function adicionarNovoItem() {
    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista]
    tmpArray.splice(index, 1);
  
    setLista(tmpArray);
  }
}

export default App;
