import Candidate from "./components/candidate/Candidate";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import SelectTable from "./components/candidate/SelectTable";
function App() {

  return (
    <div className="bg-[url('./assets/bg.jpg')]">
      <Routes>

        <Route path="/" element={<Candidate />} />
        <Route path="/selecttable" element={<SelectTable />} />
      </Routes>
    </div>
  )
}

export default App

