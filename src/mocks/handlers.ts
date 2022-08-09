import { rest } from 'msw'

import mockData from './fixtures/data.json';

const data = mockData as Record<string, typeof mockData[keyof typeof mockData]>

export const handlers = [
  rest.get('/api/sensors/:id', (req, res, context) => {
    const { id } = req.params as { id: string }
    const sensorData = data[id]
    return res(
      context.status(200),
      context.json(sensorData),
    )
  }),
  rest.get('/api/sensors', (_, res, context) => {
    const preparedData = Object.keys(mockData).map((key) => {
      const sensor = data[key];
        const lastUpdate = sensor[sensor.length - 1];
        return {
            id: key,
            last_status_updated_at: lastUpdate.received_status_at,
            battery_level: lastUpdate.battery_level,
        };
    })
    return res(
        context.status(200),
        context.json(preparedData),
    )
  }),
]