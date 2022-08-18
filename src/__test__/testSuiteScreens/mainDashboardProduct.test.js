import React from "react";
import {MainDashboardProductScreen} from '../../screens';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("MainDashboardProductScreen", ()=>{

    /** SE DECLARA UNA VARABLES**/
    let wrapperMainDasboardProduct;

    beforeAll(()=>{
        wrapperMainDasboardProduct = shallow(<Router><MainDashboardProductScreen/></Router>);
    });

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEBA**/
    test("renderear correctamente", () => {
        /** ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA**/
        expect(wrapperMainDasboardProduct).toBeTruthy()

    });

    test('Validar que no encuentre ningun nodo', ()=>{
        /** SE VALDIA QUE EXISTA EL NODO DONDE SE ESNCUNTRA EL CLIC**/
        expect(wrapperMainDasboardProduct.find('div').at(1)).toHaveLength(0);
    });

    /** SE RENDERIZA EL COMPONENTE CASO DE PRUEBA**/
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <Router>
                <MainDashboardProductScreen/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


