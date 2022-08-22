import { Link } from "react-router-dom"

export default function NavBar(){
    const linkStyle = {
        padding: "10px",
        display: "block",
        fontSize: "20px",
        color: "black",
        textDecoration: "none",

    };

    const navContainerStyle = {
        backgroundColor: "#fdfd96",
        padding: "20px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    };
    return (
    <div style={navContainerStyle}>
            <Link to="/" style={linkStyle}>
                Home
            </Link>
            <Link to="/create" style={linkStyle}>
                Crear
            </Link>
    </div>
    );
}