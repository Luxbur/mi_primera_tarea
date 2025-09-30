import { useState } from 'react';
import NavarComponent from './Componentes/NavarComponent.jsx';
import FormularioComponent from './Componentes/FormularioComponent.jsx';
import TablaComponent from './Componentes/TablaComponent.jsx';

function App() {
    const [personas, setPersonas] = useState([]);

    const agregarPersona = (persona) => {
        setPersonas([...personas, persona]);
    };

    return (
        <>
            <NavarComponent />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "2rem",
                    marginTop: "2rem"
                }}
            >
                <FormularioComponent agregarPersona={agregarPersona} />
                <TablaComponent personas={personas} />
            </div>
        </>
    );
}

export default App;
