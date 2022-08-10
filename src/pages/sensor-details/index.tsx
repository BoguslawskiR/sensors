import { TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from '@mui/lab/TabPanel';
import { Paper, Tab, Tabs, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { DateTime } from "luxon";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import sensorsService from "../../api/sensorsService";
import WarnBar from "../../components/WarnBar";
import { SensorData } from "../../types/sensorData";
import Metrics from "./components/Metrics";
import isEnoughStatuses from "./helpers/isEnoughStatuses";
import truncateData from "./helpers/truncateData";

const SensorDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [sensorDetails, setSensorDetails] = useState<SensorData[]>([])
    const [tab, setTab] = useState('1');

    const truncatedData = useMemo(() => truncateData(sensorDetails), [sensorDetails]);
    const hasEnoughStatuses = useMemo(() => isEnoughStatuses(sensorDetails), [sensorDetails]);

    useEffect(() => {
        if (!id) return;
        sensorsService.getSensor(id).then((data) => {
            setSensorDetails(data);
        });
    }, [id]);

    return <>
        <WarnBar messages={[{ bg: 'yellow', text: 'TEST BAR' }]} />
        <TabContext value={tab}>
            <TabList onChange={(_, value) => setTab(value)}>
                <Tab label="General" value="1" />
                <Tab label="Metrics" value="2" />
            </TabList>
            <TabPanel value="1">
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                    {truncatedData.map((data) => {
                        const formatedTime = DateTime.fromJSDate(new Date(data.received_status_at)).toFormat('yyyy LLL dd HH:mm')

                        return <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, py: 1, borderBottom: '1px solid #f0f0f0' }}>
                            <Typography>{formatedTime}</Typography>
                            <Typography>{data.battery_level}%</Typography>
                        </Box>;
                    })}
                    {!hasEnoughStatuses && <Box sx={{ p: 1, backgroundColor: 'lightgrey' }}>
                        <Typography>Not enough statuses</Typography>
                    </Box>}
                </Paper>
            </TabPanel>
            <TabPanel value="2">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Metrics data={truncatedData} />
                </Box>
            </TabPanel>
        </TabContext>
        <div />
    </>
};

export default SensorDetails