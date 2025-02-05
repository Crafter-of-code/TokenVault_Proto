import React from "react";
import styles from "./styles/Auth.module.css";
import axios from "axios";
export default function Login() {
  const user_name = React.useRef();
  const user_pass = React.useRef();
  function submition_handler(event) {
    event.preventDefault();
    const data = {
      username: user_name.current.value,
      userpassword: user_pass.current.value,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/login", data, { withCredentials: true })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }
  return (
    <React.Fragment>
      <main>
        <section className={styles.first_aside}>Aside</section>
        <section className={styles.second_aside}>
          <h1>Login</h1>
          <form>
            <input
              type="email"
              placeholder="Enter you Email addres"
              required
              title="Enter email here"
              ref={user_name}
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              title="Enter password here"
              ref={user_pass}
            />
            <button onClick={submition_handler}>submit</button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}
