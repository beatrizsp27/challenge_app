import React from "react";
import {MainDetailsProductScreen} from '../../screens';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("MainDetailsProductScreen", ()=>{

    /** SE DECLARA UNA VARABLES**/
    let mainDetailsProductScreen;

    beforeAll(()=>{
        mainDetailsProductScreen = shallow(
            <Router>
               <MainDetailsProductScreen/>
            </Router>
        );
    });

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("renderear correctamente", () => {
        // ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA
        expect(mainDetailsProductScreen).toBeTruthy()

    })

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEB Y VALIDAR QUE NO SE HAGAN CAMBIOS QUE NO SEAN NECESARIOS**/
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <Router>
                <MainDetailsProductScreen/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

});


