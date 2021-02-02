// S => State
// T => Type
// K => Key
// V => Value
// E => Element
// P => Properties

function useState<S extends number | string = string>(){
  let state: S;

  function getState(){
    return state;
  }

  function setState(newState: S){
    state = newState;
  }
  return { getState, setState };
}

const newState = useState();
newState.setState("foo");
//newState.setState(2);
console.log(newState.getState());


