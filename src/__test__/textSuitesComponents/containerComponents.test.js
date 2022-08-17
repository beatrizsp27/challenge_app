import React from "react";
import {ContainerComponent} from '../../component';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";

configure({adapter: new Adapter() })

describe("* ContainerComponent", ()=>{

    test('Prueba Container component buscar si cuenta con un componente hijo', () => {
        const output = shallow(<ContainerComponent/>);
        expect(output.children().exists()).toBe(false);
    });

    // SE RENDERIZA EL COMPONENTE CASO DE PRUEBA
    test("Se crea el snap", () => {
        const tree = renderer.create(
            <ContainerComponent>
              <h1>Hola mundo</h1>
            </ContainerComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});


