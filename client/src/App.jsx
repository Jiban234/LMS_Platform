import { ToastContainer } from "react-toastify";
import Login from "./pages/login";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div>
      <ToastContainer />
      <main>
        <Navbar/>
        <Login />
      </main>
    </div>
  );
}

export default App;
