import './App.css'
//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </div>
  );
}

export default App;
