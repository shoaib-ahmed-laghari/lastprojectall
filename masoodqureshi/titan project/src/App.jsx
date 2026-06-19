import Dashboard from './components/Dashboard'; // 👇 Dashboard component ko import kiya
import './App.css'; // Agar global styles use karni hain

function App() {
  return (
    <div className="App">
      {/* 👇 Yahan aapka dashboard display hoga */}
      <Dashboard />
    </div>
  );
}

export default App;