import './App.css';
import Sidebar from './components/Sidebar';
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <h1>TimeStamp : 33:20</h1> 
      {/* Sidebar */}
      <Sidebar />
      {/* Chat Component */}
      <Chat />
    </div>
  );
}

export default App;
