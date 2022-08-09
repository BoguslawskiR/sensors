import { Route, Routes } from "react-router-dom";

import Page from "../components/Page";
import SensorDetails from "./sensor-details";
import SensorsList from "./sensors-list";

function PageRoutes() {
    return <Routes>
        <Route element={<Page />}>
            <Route index element={<SensorsList />}/>
            <Route path="/sensor/:id" element={<SensorDetails />} />
        </Route>
    </Routes>
}

export default PageRoutes;