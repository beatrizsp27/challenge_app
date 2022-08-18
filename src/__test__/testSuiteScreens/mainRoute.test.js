import React from "react";
import { MainRootScreen } from '../../screens';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("MainRootScreen", ()=>{

    /** SE DECLARA UNA VARABLES**/
    let wrapperMainRootScreen;

    beforeAll(()=>{
        wrapperMainRootScreen = shallow
        (<Router>
            <MainRootScreen/>
        </Router>);
    });

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEBA**/
    test("renderear correctamente", () => {
        /** ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA**/
        expect(wrapperMainRootScreen).toBeTruthy();
        /** SE VALDIA QUE NO EXISTA UN NODO COMPLETO**/
        expect(wrapperMainRootScreen.find('div').length).toEqual(0);

    })

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEB Y VALIDAR QUE NO SE HAGAN CAMBIOS QUE NO SEAN NECESARIOS**/
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <Router>
                <MainRootScreen/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


