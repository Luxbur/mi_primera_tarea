import { useState } from "react";
function Navar () {
    const [titulo, setTitulo] = useState('Registros');

    return(
        <>
            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                background: "#e75480",
                color: "#fff",
                padding: "1rem 0",
                textAlign: "center",
                borderRadius: "0 0 10px 10px",
                zIndex: 1000,
                boxShadow: "0 2px 8px rgba(231,84,128,0.15)"
            }}>
                <h1 style={{
                    margin: 0,
                    fontSize: "2rem",
                    letterSpacing: "2px"
                }}>{titulo}</h1>
            </nav>
            <div style={{height: "80px"}}></div> {}
        </>
    );
}

export default Navar;