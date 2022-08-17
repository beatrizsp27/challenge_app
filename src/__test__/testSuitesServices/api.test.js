import React from "react";
import {GET_PRODUCT_BY_ID, GET_PRODUCT_SEARCH } from '../../api';
import mockAxios from "jest-mock-axios";


describe("* TestSuiteService", ()=>{

    /** SE EJECUTA ANTES DE ENTRA AL SERVICIO**/
    afterEach(() => {
        mockAxios.reset();
    });

    afterAll(() => {
        jest.setTimeout(10000);
    })

    describe('TestSuiteService-recuperarProducto-medianteId', () => {
        console.log('Inicio-Describe-TestSuiteService-recuperarProducto-medianteId')
        it('TestSuiteService-TestSuiteService-recuperarProducto-medianteId', async () => {

            /** RESPUESTA */
            const response = {
                "success": true,
                "data": {
                    "author": {
                        "name": "Beatriz",
                        "lastname": "Hernandez Hernandez"
                    },
                    "item": {
                        "id": "MLA836748726",
                        "title": "4 Banco Taburete Silla De Pino Natural 45cm Alto",
                        "price": {
                            "currency": "ARS",
                            "amount": 10875,
                            "decimals": 10875
                        },
                        "picture": "http://http2.mlstatic.com/D_624681-MLA46346557427_062021-I.jpg",
                        "condition": "new",
                        "free_shipping": true,
                        "sold_quantity": 25,
                        "description": "ESPECIFICACIONES:\n\n- Banqueta alta taburete DE 45 CM Aprox al asiento\n- En NATURAL listas para pintar.\n- Las medidas son aproximadas, pueden variar unos mm.\n\n- - - SOMOS FABRICANTES - - -\n\n- FORMAS DE ENTREGA -\nHacemos envíos a todo el país, todos los días hábiles. Utilizamos Mercado Envíos en todas nuestras ventas. Podes calcular los tiempos y costos de envío ingresando tu código postal en la sección ENVIOS, a la derecha de las fotos del producto.\n\nSi la opción de envío es ENVIO RAPIDO A DOMICILIO, significa que recibirás tu compra EN EL DIA (siempre y cuando la realices antes de las 13 horas). La franja horaria de entrega es de 10 a 21 horas. ( en caso de que no se encuentren en el domicilio en el horario indicado, deben informarnos para coordinarlo, Si la persona que recibe el producto no se encuentra en el domicilio sin haber avisado previamente antes de que el producto se despache, SE RECOORDINARA LA ENTREGA Y LA EMPRESA DE LOGISTICA LE COBRARÀ NUEVAMENTE EL ENVIO).\n\n* CONTAMOS CON PRECIOS MAYORISTAS Y MINORISTAS *\n\n* QUERI ACCESORIOS *"
                    }
                }
            }

            const errorData = {
                "error": "El identificador no puede ser nullo"
            };

            /** SE SIMULA RESPUESTA QUE SE ESPERA OBTENER**/
            mockAxios.get.mockResolvedValueOnce(response);

            /** VARIABLE A BUSCAR**/
            const id = 'MLA836748726'

            const onSuccessGetProduct = (responseData) =>{
                expect(responseData).toEqual(response)
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_BY_ID(id, onSuccessGetProduct, onError, onDone);
            console.log('Fin-TestSuiteService-recuperarProducto-medianteId')
        })

        it('TestSuiteService-TestSuiteService-recuperarProducto-medianteId-Error', async () => {

            const errorData = {
                error: {
                    success: false,
                    message: 'Ocurrió un error',
                    title: ' Error interno',
                    status: 400
                }
            };

            /** SE SIMULA RESPUESTA QUE SE ESPERA OBTENER**/
            mockAxios.get.mockRejectedValueOnce(errorData);

            /** VARIABLE A BUSCAR**/
            const id = 'MLA836748726'

            const onSuccessGetProduct = (responseData) =>{
                expect(responseData).toEqual(errorData);
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_BY_ID(id, onSuccessGetProduct, onError, onDone);
            console.log('Fin-TestSuiteService-recuperarProducto-medianteId')
        })

        it('TestSuiteService-TestSuiteService-recuperarProducto-medianteId-null', async () => {

            /** RESPUESTA */
            const response = {
                "success": true,
                "data": {
                    "author": {
                        "name": "Beatriz",
                        "lastname": "Hernandez Hernandez"
                    },
                    "item": {
                        "id": "MLA836748726",
                        "title": "4 Banco Taburete Silla De Pino Natural 45cm Alto",
                        "price": {
                            "currency": "ARS",
                            "amount": 10875,
                            "decimals": 10875
                        },
                        "picture": "http://http2.mlstatic.com/D_624681-MLA46346557427_062021-I.jpg",
                        "condition": "new",
                        "free_shipping": true,
                        "sold_quantity": 25,
                        "description": "ESPECIFICACIONES:\n\n- Banqueta alta taburete DE 45 CM Aprox al asiento\n- En NATURAL listas para pintar.\n- Las medidas son aproximadas, pueden variar unos mm.\n\n- - - SOMOS FABRICANTES - - -\n\n- FORMAS DE ENTREGA -\nHacemos envíos a todo el país, todos los días hábiles. Utilizamos Mercado Envíos en todas nuestras ventas. Podes calcular los tiempos y costos de envío ingresando tu código postal en la sección ENVIOS, a la derecha de las fotos del producto.\n\nSi la opción de envío es ENVIO RAPIDO A DOMICILIO, significa que recibirás tu compra EN EL DIA (siempre y cuando la realices antes de las 13 horas). La franja horaria de entrega es de 10 a 21 horas. ( en caso de que no se encuentren en el domicilio en el horario indicado, deben informarnos para coordinarlo, Si la persona que recibe el producto no se encuentra en el domicilio sin haber avisado previamente antes de que el producto se despache, SE RECOORDINARA LA ENTREGA Y LA EMPRESA DE LOGISTICA LE COBRARÀ NUEVAMENTE EL ENVIO).\n\n* CONTAMOS CON PRECIOS MAYORISTAS Y MINORISTAS *\n\n* QUERI ACCESORIOS *"
                    }
                }
            }

            const errorData = {
                "error": "El identificador no puede ser nullo"
            };

            /** SE SIMULA RESPUESTA QUE SE ESPERA OBTENER**/
            mockAxios.get.mockResolvedValueOnce(response);

            /** VARIABLE A BUSCAR**/
            const id = null;

            const onSuccessGetProductNull = (responseData) =>{
                expect(responseData).toEqual(response)
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_BY_ID(id, onSuccessGetProductNull, onError, onDone);
            console.log('Fin-TestSuiteService-recuperarProducto-medianteId')
        })
    })
})
