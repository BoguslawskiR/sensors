import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import sensorsService from "../../api/sensorsService";
import WarnBar from "../../components/WarnBar";
import { SensorData } from "../../types/sensorData";
import isEnoughStatuses from "./helpers/isEnoughStatuses";
import truncateData from "./helpers/truncateData";

const SensorDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [sensorDetails, setSensorDetails] = useState<SensorData[]>([])

    const truncatedData = useMemo(() => truncateData(sensorDetails), [sensorDetails]);
    const hasEnoughStatuses = useMemo(() => isEnoughStatuses(sensorDetails), [sensorDetails]);

    useEffect(() => {
        if (!id) return;
        sensorsService.getSensor(id).then((data) => {
            setSensorDetails(data);
        });
    }, [id]);

    return <>
        <WarnBar messages={[{bg: 'yellow', text: 'TEST BAR'}]} />
        <div />
    </>
};

export default SensorDetails