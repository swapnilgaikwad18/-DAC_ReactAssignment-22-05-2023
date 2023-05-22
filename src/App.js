/* A user-defined component that has two local variables text and style where text is any
string and style contains css style property . The component must display this text as a main
heading with the style applied using interpolation.
Display this tag from App component */


function App(){
  return(
    <div>
      <Display/>
    </div>);
}

function Display(){
  let text = `Hello, My name is Swapnil Gaikwad doing CDAC in TVM.`;
  let theme = "bg-success";

  return(<div className={theme}><h1>{text}</h1></div>);
}

export default App;