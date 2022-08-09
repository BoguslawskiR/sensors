import { DateTime } from "luxon";
import { SensorData } from "../../../types/sensorData";

const truncateData = (sensorData: SensorData[]): SensorData[] => {
    if (sensorData.length === 0) return [];
    const lastDeliveredStatus = DateTime.fromJSDate(new Date(sensorData[sensorData.length - 1].received_status_at)).minus({ days: 7 })
    const startTruncateIndex = sensorData.findIndex((data) => {
        return DateTime.fromJSDate(new Date(data.received_status_at)) > lastDeliveredStatus
    });
    return sensorData.slice(Math.max(0, startTruncateIndex - 1))
};

export default truncateData;