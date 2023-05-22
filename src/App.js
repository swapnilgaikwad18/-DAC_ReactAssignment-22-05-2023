//ii) A user-defined component (tag) to display Hello World.
//Display this tag from App component

function App(){
  return(
    <div>
      <Display/>
    </div>);
}

function Display(){
  return(<div><h1>Hello World!!!</h1></div>);
}

export default App;