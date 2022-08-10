import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SensorsList from '..';

describe('Pages / Sensors List', () => {
    test('should render properly entries', async () => {
        render(<BrowserRouter><SensorsList /></BrowserRouter>);
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 250));
        });
        expect(screen.getByText('Name')).toBeVisible();
        expect(screen.getByText('Battery (%)')).toBeVisible();

        expect(screen.getAllByRole('row')).toHaveLength(16);
        expect(screen.getByText('308398F99464')).toBeVisible();
    })
});