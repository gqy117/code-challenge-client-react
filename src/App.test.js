import { render } from '@testing-library/react';
import App from './App';

const data = [
    {
        id: '1',
        name: 'Pilsner',
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
    {
        id: '2',
        name: 'IPA',
        minimumTemperature: 5,
        maximumTemperature: 6,
    },
    {
        id: '3',
        name: 'Lager',
        minimumTemperature: 4,
        maximumTemperature: 7,
    },
    {
        id: '4',
        name: 'Stout',
        minimumTemperature: 6,
        maximumTemperature: 8,
    },
    {
        id: '5',
        name: 'Wheat beer',
        minimumTemperature: 3,
        maximumTemperature: 5,
    },
    {
        id: '6',
        name: 'Pale Ale',
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
];

describe('<App />', () => {
    it('renders without errors', async () => {
        const { container } = render(<App />);
        await new Promise((r) => setTimeout(r, 4000));

        data.forEach(({ id, name, minimumTemperature, maximumTemperature }) => {
            const product = container.querySelector(`tbody > :nth-child(${id}) > :nth-child(1)`).innerHTML;
            const temperature = container.querySelector(`tbody > :nth-child(${id}) > :nth-child(2)`).innerHTML;
            const status = container.querySelector(`tbody > :nth-child(${id}) > :nth-child(3) > span`).innerHTML;
            
            const expected = temperature < minimumTemperature ? 'too low' : temperature > maximumTemperature ? 'too high' : 'all good';

            expect(product).toBe(name);
            expect(status).toBe(expected);
        });
    });
});
