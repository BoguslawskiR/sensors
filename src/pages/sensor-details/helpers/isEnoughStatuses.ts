import { DateTime } from "luxon";
import { SensorData } from "../../../types/sensorData";

const isEnoughStatuses = (sensorData: SensorData[]): boolean => {
    if (sensorData.length === 0) return true;
    const firstDeliveredStatus = DateTime.fromJSDate(new Date(sensorData[0].received_status_at));
    const lastDeliveredStatus = DateTime.fromJSDate(new Date(sensorData[sensorData.length - 1].received_status_at)).minus({ days: 7 });
    return lastDeliveredStatus > firstDeliveredStatus;
};

export default isEnoughStatuses;