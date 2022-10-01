import { useState } from "react";
import { ConfirmPassword } from "./ConfirmPassword";
import "./styles.css";

export default function App() {
  //for character count
  const [charCount, setCharCount] = useState(0);

  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [passRes, setPassRes] = useState();

  return (
    <div className="App">
      <div className="charCounts">
        <h1>ex1: Character Count</h1>
        <textarea
          rows="10"
          cols="40"
          onChange={(e) => setCharCount(e.target.value.length)}
        ></textarea>
        <p>
          {" "}
          <b>Character Count: </b>
          <span className="result">{charCount}</span>
        </p>
      </div>

      <div className="sperator"></div>

      <div className="passwordMatching">
        <h1>ex2: Password Matching</h1>
        <div className="inputs">
          <div>
            <label>Enter Password </label>
            <input
              onChange={(e) => setPass(e.target.value)}
              name="pwd"
              type="password"
            ></input>
          </div>
          <div>
            <label>Confirm Password </label>
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              name="cPwd"
              type="password"
            ></input>
          </div>
          <ConfirmPassword pwd={pass} cPwd={confirmPass} />
        </div>

        <div className="sperator"></div>
      </div>
    </div>
  );
}
