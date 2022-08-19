import React from "react";
import { CategoriesComponent } from '../../component';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

/** SE CONFIGURA EL ADAPTADOR**/
import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() })

describe("CategoriesComponent", ()=>{

    /** VARIABLES**/
    let wrapperCategorias;
    const categoriesArray = ["ropa", 'electronico'];

    beforeAll(()=>{
        /** SE MONTA EL COMPONENTE**/
        wrapperCategorias = shallow(<CategoriesComponent categoriesArray={categoriesArray} />);
    });

    /** SE VALIDA QUE EL COMPONENTE ESTE DEFENIDO Y QUE EXISTA**/
    test("renderear correctamente", () => {
        expect(wrapperCategorias).toBeTruthy()
        wrapperCategorias.find('div');
        expect(wrapperCategorias.length).toEqual(1);
    })


    /** SE GENERA EL SNAPSHAP PARA VALIDAR LOS QUE LOS CAMBIOS DEL COMPONENTE SEAN CONTROLADOS**/
    test("Se crea el snap despues de las pruebas", () => {
        const treeSearch = renderer.create(<CategoriesComponent />).toJSON();
        expect(treeSearch).toMatchSnapshot();
    })
});
