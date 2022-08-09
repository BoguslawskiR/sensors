import { SensorData } from "../types/sensorData";
import { Sensors } from "../types/sensors";
import apiGet from "./fetch";

const sensorsService = {
    getSensors: async () => {
        return await apiGet<Sensors>('/sensors');
    },
    getSensor: async (id: string) => {
        return await apiGet<SensorData[]>(`/sensors/${id}`);
    },
};

export default sensorsService;