
import './App.css';
import configStore from './Store/configStore';
import { addUser, deleteUser, updateUser } from './Store/user';

const store =configStore()
store.dispatch(addUser({name:"Deepak",email:"hed",contact:"89895200"}))
store.dispatch(addUser({name:"AminPathan",email:"lol",contact:"121212200"}))
store.dispatch(addUser({name:"Amin",email:"losl",contact:"9879872200"}))
store.dispatch(addUser({name:"Amin2",email:"losls",contact:"98798s72200"}))
store.dispatch(deleteUser({id:102}))
store.dispatch(updateUser({id:103,name:"omar",email:"kio",contact:"hjhjh"}))
console.log(store.getState(),"users")
function App() {
  return (
    <div className="App">
      Redux Trail
    </div>
  );
}

export default App;
