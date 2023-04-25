import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-revers",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        padding: "3px 10px",
        borderRadius: "10px",
        margin: "2vh 8vw",
      }}
      className="header"
    >
      <Link to="/prompts">
        <div
          style={{
            background: "#e74c3c",
            fontSize: "1.2em",
            color: "white",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {" "}
          📜{" "}
        </div>
      </Link>

      <div>
        <span>أبو مخطوطة </span>
      </div>

      <Link to="/">
        <div>
          {" "}
          <img
            style={{ width: "35px" }}
            src="https://i.redd.it/snoovatar/avatars/c7188bf6-e14f-4047-be02-a8df1d9bba00.png"
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
