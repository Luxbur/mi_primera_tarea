function Tabla({ personas }) {
    return (
        <div style={{
            maxWidth: "500px",
            margin: "2rem auto",
            padding: "1.5rem",
            border: "2px solid #e75480",
            borderRadius: "10px",
            background: "#ffe4ef"
        }}>
            <h2 style={{
                color: "#e75480",
                marginBottom: "1rem"
            }}>Lista de Personas</h2>
            <ul style={{
                listStyle: "none",
                padding: 0
            }}>
                {personas.map((persona, idx) => (
                    <li key={idx} style={{
                        background: "#fff0f6",
                        border: "1px solid #e75480",
                        borderRadius: "4px",
                        marginBottom: "0.7rem",
                        padding: "0.7rem",
                        color: "#e75480",
                        fontWeight: "bold"
                    }}>
                        {persona.nombre} {persona.apellido} - {persona.email} - {persona.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tabla;