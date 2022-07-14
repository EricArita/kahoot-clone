import React, { useState, useEffect } from "react"
import styles from "./navbar.module.css"
import { Link, useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import decode from "jwt-decode"
import * as actionType from "../../constants/actionTypes"
import globe from "../../assets/globe.svg"
import logo from "../../assets/logo.png"
import { changeLanguage } from "../../redux/thunk-middlewares/language"

function Navbar() {
  const [user, setUser] = useState(1)
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  const socket = useSelector((state) => state.socket.socket)

  const logout = () => {
    dispatch({ type: actionType.LOGOUT })
    history.push("/auth")
    setUser(null)
    socket.disconnect()
  }

  useEffect(() => {
    const token = user?.accessToken
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout()
      }
    }
    setUser(1)
  }, [location])

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles["menu-right"]}>
          <ul className={styles.nav__list}>
            <li className={styles["nav__list-logo"]}>
              <Link to="/" className={styles["logo-link"]}>
                <img src={logo} alt="logo" className={styles["logo-img"]} />
              </Link>
            </li>
            <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "About" : "Về chúng tôi"}
              <ul className={styles["nav__list-item-drop"]}>
                <li>{isLanguageEnglish ? "How it works" : "Nó hoạt động như thế nào"} </li>
                <li>{isLanguageEnglish ? "Ways to play" : "Cách chơi"}</li>
              </ul>
            </li>
            <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "Study" : "Học"}
              <ul className={styles["nav__list-item-drop"]}>
                <li>
                  <Link to="/quizes">
                    {isLanguageEnglish ? "Public quizes" : "Câu đố công khai"}
                  </Link>
                </li>
                <li>{isLanguageEnglish ? "Test game" : "Thử nghiệm trò chơi"}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles["menu-left"]}>
          <ul className={styles.nav__list}>
            <li className={styles["nav__list-item"]}>
              {isLanguageEnglish ? "Contact" : "Liên hệ"}
            </li>

            {user === 1 ? (
              <>
                <li className={styles["nav__list-item"]}>
                  <Link to="/games/joingame">
                    {isLanguageEnglish ? "Play" : "Chơi"}
                  </Link>
                </li>
                <li className={styles["nav__list-item"]}>
                    <Link to="/myquizes">
                      {isLanguageEnglish ? "My Quizes" : "Câu đố của tôi"}
                    </Link>
                  </li>
                <li className={styles["nav__list-item"]}>
                  {/* {user.result.firstName} */}
                </li>
                <li onClick={logout} className={styles["nav__list-item"]}>
                  {isLanguageEnglish ? "Log out" : "Đăng xuất"}
                </li>
              </>
            ) : (
              <Link to="/auth" className={styles["nav__list-item"]}>
                {isLanguageEnglish ? "Log in" : "Đăng nhập"}
              </Link>
            )}
            <li className={styles["nav__list-item"]}>
              <img src={globe} alt="" />
              {isLanguageEnglish ? "EN" : "VN"}
              <ul className={styles["nav__list-item-drop"]}>
                <li
                  onClick={() => {
                    dispatch(changeLanguage(!isLanguageEnglish))
                  }}
                >
                  {isLanguageEnglish ? "VN" : "EN"}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
