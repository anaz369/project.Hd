import React, { useState, useContext } from "react";
import { FirebaseContext } from "./Store/FirebaseContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { auth } from "./Firebase/Config";
import { db } from "./Firebase/Config";
import "./Login.scss";
import { collection } from "firebase/firestore";
function Login() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    addDoc(collection(db, "users"), {
      uid: user.uid,
      name: username,
      authProvider: "local",
      email: email,
      password: password,
    });
  };
  return (
    <div className="Bdy">
      <section>
        <div class="login-wrap">
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" />
            <label for="tab-1" class="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">
              Sign Up
            </label>
            <div class="login-form">
              <form onSubmit={handleSubmit}>
                <div class="sign-in-htm">
                  <div class="group">
                    <label for="user" class="label">
                      Username
                    </label>
                    <input id="user" type="text" class="input" />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                    />
                  </div>
                  <div class="group">
                    <input id="check" type="checkbox" class="check" />
                    <label for="check">
                      <span class="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div class="group">
                    <input type="submit" class="button" value="Sign In" />
                  </div>
                  <div class="hr"></div>
                  <div class="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div class="sign-up-htm">
                  <div class="group">
                    <label for="user" class="label">
                      Username
                    </label>
                    <input
                      id="user"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      type="text"
                      class="input"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      class="input"
                      data-type="password"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">
                      Email Address
                    </label>
                    <input
                      id="pass"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      type="text"
                      class="input"
                    />
                  </div>
                  <div class="group">
                    <input
                      onClick={handleSubmit}
                      type="submit"
                      class="button"
                      value="Sign Up"
                    />
                  </div>
                  <div class="hr"></div>
                  <div class="foot-lnk">
                    <a for="tab-1">Already Member?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
