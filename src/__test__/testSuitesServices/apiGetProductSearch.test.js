import React from "react";
import { GET_PRODUCT_SEARCH } from '../../api';
import mockAxios from "jest-mock-axios";


describe("* TestSuiteService- getProductSearch", ()=>{

    /** SE EJECUTA ANTES DE ENTRA AL SERVICIO**/
    afterEach(() => {
        mockAxios.reset();
    });

    afterAll(() => {
        jest.setTimeout(10000);
    })

    describe('TestSuiteService-recuperarProducto-medianteId', () => {
        it('TestSuiteService-TestSuiteService-SearchProduct-mediante texto', async () => {
            /** RESPUESTA */
            const response = {
                "success": true,
                "data": {
                    "author": {
                        "name": "Beatriz",
                        "lastname": "Hernandez Hernandez"
                    },
                    "categories": [
                        "MLA1055",
                        "MLA1055",
                        "MLA1055",
                        "MLA1055"
                    ],
                    "items": [
                        {
                            "id": "MLA931455240",
                            "title": "Apple iPhone 11 (128 Gb) - Blanco",
                            "price": {
                                "currency": "ARS",
                                "amount": 234387,
                                "decimals": 234387
                            },
                            "picture": "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
                            "condition": "new",
                            "free_shipping": true
                        },
                        {
                            "id": "MLA1150951347",
                            "title": "Apple iPhone 11 (64 Gb) - Negro",
                            "price": {
                                "currency": "ARS",
                                "amount": 208117,
                                "decimals": 208117
                            },
                            "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
                            "condition": "new",
                            "free_shipping": true
                        },
                        {
                            "id": "MLA932318794",
                            "title": "Apple iPhone SE (2da Generación) 128 Gb - Blanco",
                            "price": {
                                "currency": "ARS",
                                "amount": 169399,
                                "decimals": 169399
                            },
                            "picture": "http://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg",
                            "condition": "new",
                            "free_shipping": true
                        },
                        {
                            "id": "MLA930793214",
                            "title": "Apple iPhone 12 (64 Gb) - Negro",
                            "price": {
                                "currency": "ARS",
                                "amount": 267999,
                                "decimals": 267999
                            },
                            "picture": "http://http2.mlstatic.com/D_740855-MLA45719698644_042021-I.jpg",
                            "condition": "new",
                            "free_shipping": true
                        }
                    ]
                }
            }

            const errorData = {
                "error": "El identificador no puede ser nullo"
            };

            /** SE SIMULA RESPUESTA QUE SE ESPERA OBTENER**/
            mockAxios.get.mockResolvedValueOnce(response);

            /** VARIABLE A BUSCAR**/
            const text= 'iphone'

            const onSuccessGetProduct = (responseData) =>{
                expect(responseData).toEqual(response)
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_SEARCH(text, onSuccessGetProduct, onError, onDone);
            console.log('Fin-TestSuiteService-TestSuiteService-SearchProduct')
        })

        it('TestSuiteService-TestSuiteService-SearchProduct-Error', async () => {

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
            const text = 'iphone'

            const onSuccessGetProduct = (responseData) =>{
                expect(responseData).toEqual(errorData);
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_SEARCH(text, onSuccessGetProduct, onError, onDone);
            console.log('Fin-TestSuiteService-SearchProduct')
        })

        it('TestSuiteService-TestSuiteService-SearchProduct-null', async () => {

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
            const text = null;

            const onSuccessGetProductNull = (responseData) =>{
                expect(responseData).toEqual(response)
            };

            const onError = (responseData) =>{
                expect(responseData).toEqual(errorData)
            };

            const onDone = (responseData) =>{
                expect(responseData).toBeUndefined()
            };

            await GET_PRODUCT_SEARCH(text, onSuccessGetProductNull, onError, onDone);
            console.log('Fin-TestSuiteService-SearchProduct')
        })
    })
})
