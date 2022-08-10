import { FC, useEffect, useState } from "react";
import { Box, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import sensorsService from "../../api/sensorsService";
import { SensorEntry } from "../../types/sensors";
import SensorRow from "./components/SensorRow";
import useSearch from "./hooks/useSearch";

const SensorsList: FC = () => {
    const [sensorsList, setSensorsList] = useState<SensorEntry[]>([]);
    const [filteredList, setSearchPhrase] = useSearch(sensorsList);

    useEffect(() => {
        sensorsService.getSensors().then((sensors) => {
            setSensorsList(sensors);
        });
    }, []);

    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Input placeholder="Search..." onChange={(e) => setSearchPhrase(e.target.value)} />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Battery&nbsp;(%)</TableCell>
                        <TableCell align="right">Last&nbsp;Update</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredList.map((sensorEntry) => (
                        <SensorRow data-testid="entry" key={sensorEntry.id} sensorEntry={sensorEntry} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}

export default SensorsList;