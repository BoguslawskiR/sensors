import { FC } from "react";
import { DateTime } from 'luxon';
import { useNavigate } from "react-router-dom";
import { Link, TableCell, TableRow } from "@mui/material"
import { SensorEntry } from "../../../../types/sensors";

interface SensorRowProps {
    sensorEntry: SensorEntry;
}

const SensorRow: FC<SensorRowProps> = ({ sensorEntry }) => {
    const navigate = useNavigate();
    const formatedTime = DateTime.fromJSDate(new Date(sensorEntry.last_status_updated_at)).toFormat('yyyy LLL dd HH:mm')

    return <TableRow
        key={sensorEntry.id}
    >
        <TableCell component="th" scope="row">
            {sensorEntry.id}
        </TableCell>
        <TableCell align="right" sx={{ color: sensorEntry.battery_level < 20 ? 'red' : 'black' }}>{sensorEntry.battery_level}</TableCell>
        <TableCell align="right">{formatedTime}</TableCell>
        <TableCell component="th" align="right" scope="row">
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    navigate(`/sensor/${sensorEntry.id}`);
                }}
            >
                Details
            </Link>
        </TableCell>
    </TableRow>
};

export default SensorRow;