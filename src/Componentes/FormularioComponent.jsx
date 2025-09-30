import { useState } from "react";

function Formulario({ agregarPersona }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <form
            style={{
                maxWidth: "400px",
                margin: "2rem auto",
                padding: "2rem",
                border: "2px solid #e75480",
                borderRadius: "10px",
                background: "#ffe4ef"
            }}
            onSubmit={e => {
                e.preventDefault();
                agregarPersona({ nombre, apellido, email, telefono });
                setNombre('');
                setApellido('');
                setEmail('');
                setTelefono('');
            }}
        >
            <label style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "bold",
                color: "#e75480"
            }}>Nombre: </label>
            <input
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    border: "1px solid #e75480",
                    borderRadius: "4px",
                    background: "#fff0f6"
                }}
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "bold",
                color: "#e75480"
            }}>Apellido: </label>
            <input
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    border: "1px solid #e75480",
                    borderRadius: "4px",
                    background: "#fff0f6"
                }}
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <label style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "bold",
                color: "#e75480"
            }}>Email: </label>
            <input
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    border: "1px solid #e75480",
                    borderRadius: "4px",
                    background: "#fff0f6"
                }}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{
                display: "block",
                marginTop: "1rem",
                fontWeight: "bold",
                color: "#e75480"
            }}>Teléfono: </label>
            <input
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    border: "1px solid #e75480",
                    borderRadius: "4px",
                    background: "#fff0f6"
                }}
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button
                type="submit"
                style={{
                    marginTop: "1rem",
                    width: "100%",
                    padding: "0.7rem",
                    background: "#e75480",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background 0.2s"
                }}
            >
                Agregar Persona
            </button>
        </form>
    );
}

export default Formulario;