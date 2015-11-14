import React from "react";
import { getData } from "../../common/request";
import styles from "./style.css";

export default class AboutPage extends React.Component {
  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
  }

  render() {
    return (
      <div className={styles.content}>
        <h1>About</h1>
        <p className={styles.welcomeText}>This is the about page</p>
      </div>
    );
  }
}
