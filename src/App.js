//A user-defined component that has a local variable text .The component must display this
//text as a main heading using interpolation.
//Display this tag from App component

function App(){
  return(
    <div>
      <Display/>
    </div>);
}

function Display(){
  let text = `Hello, My name is Swapnil Gaikwad doing CDAC in TVM.`;
  return(<div><h1>{text}</h1></div>);
}

export default App;