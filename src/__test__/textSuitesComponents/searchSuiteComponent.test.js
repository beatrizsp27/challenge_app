import React from "react";
import { SearchComponent } from '../../component';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("* ContainerComponent", ()=>{

    // SE DECLARA UNA VARABLES
    let wrapper;


    beforeAll(()=>{
        const handleChange = ()=>{};
        const arrayListProduct = [];
        wrapper = shallow(<SearchComponent handleChange={handleChange} arrayListProduct={arrayListProduct}/>);
    });

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("renderear correctamente", () => {
        // ESPERANDO QUE WAPER ESTE DEFENIDO Y QUE EXISTA
        expect(wrapper).toBeTruthy()

    })

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("Se crea el snap", () => {
        const tree = renderer.create(<SearchComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


