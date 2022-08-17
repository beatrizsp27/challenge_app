import React from "react";
import { MainDetailsProductScreen } from '../../screens';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("* MainDetailsProductScreen", ()=>{

    // SE DECLARA UNA VARABLES
    let wrapper;

    beforeAll(()=>{
        wrapper = shallow(
            <Router>
               <MainDetailsProductScreen/>
            </Router>
        );
    });

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("renderear correctamente", () => {
        // ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA
        expect(wrapper).toBeTruthy()

    })

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <Router>
               <MainDetailsProductScreen/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


