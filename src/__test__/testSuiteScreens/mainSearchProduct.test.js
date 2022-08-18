import React from "react";
import {MainDashboardProductScreen, MainSearchProductScreen} from '../../screens';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("MainSearchProductScreen", ()=>{

    /** SE DECLARA UNA VARABLES**/
    let wrapperMainSearchProductScreen;

    beforeAll(()=>{
        wrapperMainSearchProductScreen = shallow
        (<Router>
            <MainSearchProductScreen/>
        </Router>);
    });

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEBA**/
    test("renderear correctamente", () => {
        /** ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA**/
        expect(wrapperMainSearchProductScreen).toBeTruthy()

    })

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEBA**/
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <Router>
                <MainSearchProductScreen/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


