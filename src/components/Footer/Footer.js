import React from "react";
import styles from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux"

function Footer() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-row"]}>
          <div className={styles["footer-column"]}>
            <h4>{isLanguageEnglish ? "Made by:" : "Nhóm sinh viên thực hiện:"}</h4>
            <ul>
              <li>
                <a href="/">Bùi Phan Thọ</a>
              </li>
              <li>
                <a href="/">17xxxxxx</a>
              </li>
              <li>
                <a href="/">Lê Nguyễn Thạnh Trung</a>
              </li>
              <li>
                <a href="/">18120099</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
