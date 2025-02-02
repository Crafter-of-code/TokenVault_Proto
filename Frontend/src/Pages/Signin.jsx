import React from "react";
import styles from "./styles/Auth.module.css";
import axios from "axios";
export default function Signin() {
  const [status, setstatus] = React.useState("");
  const username = React.useRef();
  const password = React.useRef();

  function onSubmit_handler(event) {
    event.preventDefault();
    const data = {
      user_name: username.current.value,
      pass_word: password.current.value,
    };
    try {
      axios
        .post("http://localhost:8080/signin", data, {
          // headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        })
        .then((res) => console.log(res.data))
        .catch((error) => error);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <main>
        <section className={styles.second_aside}>
          <h1>Sigin in</h1>
          <form action="">
            <input type="email" ref={username} placeholder="Enter you email" />
            <input
              type="password"
              ref={password}
              placeholder="Enter you password"
            />
            <button onClick={onSubmit_handler}>Signin</button>
          </form>
          <h1>{status}</h1>
        </section>
        <section className={styles.first_aside}></section>
      </main>
    </React.Fragment>
  );
}
