import React, { useState } from 'react';
import './App.css';

const Titulo = function(){
  return (
    <h1>Lista de Compras:</h1>
  )}

  const Lista = function({itemList}){
    return (
      <ul>
        {itemList.map((item) => (
          <li><strong>{item}</strong></li>
        ))}
      </ul>
    )
  }

function App() {

  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([])
  const handleRemoveItem = React.useCallback((todo) => {
    let newItemList = [itemList];
    newItemList.splice(itemList.indexOf(todo), 1)
    setItemList(newItemList);
  }, [itemList]);
  
  const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
}

  return (
    <div className="App">
      <Titulo></Titulo>
      <br/>
      <br/>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} />
      <button class="btn btn-primary" onClick={addItem}>Adicionar Item</button>
      <button class="btn btn-primary" onClick={e => handleRemoveItem(handleRemoveItem)}> Limpar Lista </button>
      
      <Lista itemList={itemList}></Lista>
    
    </div> 
  );
}


export default App;