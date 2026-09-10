import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";
import useGetCampuses from './hooks/useGetCampuses.jsx';

function App() {
  const campuses = useGetCampuses();

  return (
    <CampusPicker campuses={campuses} />
  )
}

export default App;
