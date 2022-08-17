import { render, screen } from '@testing-library/react';
import App from '../App';

describe("* AppScreen", ()=>{

    test('Prueba Hola mundo', () => {
        render(<App />);
        const linkElement = screen.getByText('Hola mundo');
        expect(linkElement).toBeInTheDocument();
    });
})

