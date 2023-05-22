/* A user-defined component that has a local variables text where text is any string . The
component must display this text as a main heading with text-primary and bg-light
Boortstrap styles applied .
Display this tag from App component*/


function App(){
  return(
    <div>
      <Display/>
    </div>);
}

function Display(){
  let text = `Hello, My name is Swapnil Gaikwad doing CDAC in TVM.`;
  let theme = "bg-primary text-light";

  return(<div className={theme}><h1>{text}</h1></div>);
}

export default App;