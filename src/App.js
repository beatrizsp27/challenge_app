import {ContainerComponent} from "./component";

function App() {
    return (
        <ContainerComponent>
            <div className={'screens_app_root'} >
                <h1>Error 404</h1>
                <label>La pagina que buscas no existe o fue cambiada de lugar</label>
            </div>
        </ContainerComponent>

    );
}

export default App;
