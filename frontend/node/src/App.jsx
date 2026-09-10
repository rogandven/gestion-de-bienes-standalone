import "../node_modules/picnic/picnic.min.css";
import { getCampus } from './service/campus.service.js';
import CampusPicker from "./components/CampusPicker.jsx";
import BodegaPicker from "./components/BodegaPicker.jsx";

import useGetCampuses from './hooks/useGetCampuses.jsx';
import useGetBodegas from "./hooks/useGetBodegas.jsx";


function App() {
  const campuses = useGetCampuses();
  const [bodegas, fetchBodegas] = useGetBodegas(null);

  return (
    <>
      <CampusPicker campuses={campuses} fetchBodegas={fetchBodegas} />
      <BodegaPicker bodegas={bodegas} />
    </>
  )
}

export default App;
