import { renderHook, act } from "@testing-library/react"
import useSearch from "../hooks/useSearch"

const mockData = require('../../../mocks/fixtures/data.json');

const parsedData = Object.keys(mockData).map((key) => {
    const sensor = mockData[key];
    const lastUpdate = sensor[sensor.length - 1];
    return {
        id: key,
        last_status_updated_at: lastUpdate.received_status_at,
        battery_level: lastUpdate.battery_level,
    };
});

describe('Page / Sensors List / hooks', () => {
    describe('useSearch', () => {
        test('should properly filtering list', () => {
            const { result } = renderHook(() => useSearch(parsedData))
            expect(result.current[0]).toHaveLength(15);
    
            act(() => {
                result.current[1]('464');
            })
    
            expect(result.current[0]).toHaveLength(1);
        })
    })
})