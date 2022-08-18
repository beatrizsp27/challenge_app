import React from "react";
import { SearchComponent } from '../../component';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

/** SE CONFIGURA EL ADAPTADOR**/
import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("ContainerComponent", ()=>{

    /** VARIABLES**/
    let wrapperSearch;
    const handleChange = jest.fn();
    const prevent = jest.fn();
    const onAction = jest.fn();

    beforeAll(()=>{
        /** SE MONTA EL COMPONENTE**/
        wrapperSearch = shallow(<SearchComponent handleChange={handleChange} onAction={onAction}/>);
    });

    /** SE VALIDA QUE EL COMPONENTE ESTE DEFENIDO Y QUE EXISTA**/
    test("renderear correctamente", () => {
        expect(wrapperSearch).toBeTruthy()
        wrapperSearch.find('img');
        expect(wrapperSearch.length).toEqual(1);
    })

    /** SE VALIDA QUE EL FORMULARIO FUNCIONE CORRECTAMENTE**/
    test("llamar al form enviando datos y validando que fueron recibidos ¡", () => {
        wrapperSearch.find('input').simulate('change', { target : {values: 'Esta es una prueba'}});
        wrapperSearch.find('form').simulate('submit', {preventDefault: prevent});
        expect(handleChange.mock.calls).toEqual([
            [
                {
                    "target": {
                        "values": "Esta es una prueba"
                    }
                }
            ]
        ]);
        expect(prevent.mock.calls).toEqual([]);
    });

    /** SE VALIDA QUE EL FORMULARIO FUNCIONE CORRECTAMENTE**/
    test("llamar al form enviando datos y validando que fueron recibidos y probando onClick", () => {
        /** ENVIO DE DATOS**/
        wrapperSearch.find('input').simulate('change', { target : {values: 'Esta es una prueba 2'}});
        wrapperSearch.find('form').simulate('submit', {preventDefault: prevent});

        /** SE VALDIA QUE EXISTA EL NODO DONDE SE ESNCUNTRA EL CLIC**/
        expect(wrapperSearch.find('div')).toHaveLength(3);

        /** SE SIMULA EL CLIC DE LA BUSQUEDA**/
        const simulateOnCLick = wrapperSearch.find('div').at(2);
        simulateOnCLick.simulate('click');
        expect(handleChange.mock.calls).toEqual([
            [
                {
                    "target": {
                        "values": "Esta es una prueba 2"
                    }
                }
            ]
        ]);
        /** SE VALIDA QUE SE HAYA EJECUTADO SOLAMENTE UNA VEZ**/
        expect(prevent.mock.calls).toEqual([]);
    });

    /** SE GENERA EL SNAPSHAP PARA VALIDAR LOS QUE LOS CAMBIOS DEL COMPONENTE SEAN CONTROLADOS**/
    test("Se crea el snap despues de las pruebas", () => {
        const treeSearch = renderer.create(<SearchComponent />).toJSON();
        expect(treeSearch).toMatchSnapshot();
    })
});
