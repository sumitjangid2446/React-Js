import App from "react";
function Demo({ Product, Price, Btn }) {
    return (
        <div style={{
            border: "2px solid gray",
            padding: "16px",
            margin: "20px",
            width: "240px",
            borderRadius: "10px"
        }}>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDZxFrZFqVSC9cCBfJ7dI4cbnptteXDOvig&s"
                alt="phone"
                width="250 "
            />
            <h2> {Product}</h2>
            <p>{Price}</p>
            <button>{Btn}</button>
        </div >
    );
}
export default Demo
