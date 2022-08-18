import { render, screen } from '@testing-library/react';
import App from '../App';

describe("AppScreen", ()=>{

    test('Prueba de recuperacion de mensaje error 404', () => {
        render(<App />);
        const linkElement = screen.getByText('Error 404');
        expect(linkElement).toBeInTheDocument();
    });

    test('Prueba de recuperacion de mensaje la pagina que....', () => {
        render(<App />);
        const linkElement = screen.getByText('La pagina que buscas no existe o fue cambiada de lugar');
        expect(linkElement).toBeInTheDocument();
    });
})

