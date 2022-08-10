import { FC } from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import {
    AnimatedAxis,
    AnimatedGrid,
    XYChart,
    Tooltip,
    AnimatedAreaSeries,
    lightTheme,
} from '@visx/xychart';
import { SensorData } from '../../../../types/sensorData';

interface MetricsProps {
    data: SensorData[];
}

const accessors = {
    xAccessor: (d: SensorData) => DateTime.fromJSDate(new Date(d.received_status_at)).toFormat('dd LLL HH:mm'),
    yAccessor: (d: SensorData) => d.battery_level,
};

const Metrics: FC<MetricsProps> = ({ data }) => {
    return <Box sx={{ p: 4 }}>
        <XYChart theme={lightTheme} height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <AnimatedAxis orientation="bottom" />
            <AnimatedGrid columns={false} numTicks={10} />
            <AnimatedAreaSeries dataKey="Battery" data={data} {...accessors} />
            <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showVerticalCrosshair
                showSeriesGlyphs
                renderTooltip={({ tooltipData }) => (
                    <div>
                        {accessors.xAccessor(tooltipData?.nearestDatum?.datum as SensorData)}
                        {', '}
                        {accessors.yAccessor(tooltipData?.nearestDatum?.datum as SensorData)}%
                    </div>
                )}
            />
        </XYChart>
    </Box>
};

export default Metrics;