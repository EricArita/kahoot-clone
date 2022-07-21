import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./myQuiz.module.css"
import { deleteQuiz } from "../../../redux/thunk-middlewares/quizMiddleware"
import { createGame } from "../../../redux/thunk-middlewares/game"
import moment from "moment"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useHistory } from "react-router-dom"
import { createLeaderboard } from "../../../redux/thunk-middlewares/leaderboard"

function MyQuiz({ quiz }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  const socket = useSelector((state) => state.socket.socket)
  
  const openQuizPage = (e) => {
    history.push(`/myquizes/${quiz._id}`)
  }

  const addGame = async (e) => {
    e.preventDefault();

    let gameData = {
      quizId: quiz._id,
      isLive: true,
      pin: String(Math.floor(Math.random() * 9000) + 1000),
    }
    const newGame = await dispatch(createGame(gameData, history))
    let leaderboardData = { gameId: newGame._id, playerResultList: [] }

    const newLeaderboard = await dispatch(createLeaderboard(leaderboardData))
    socket.emit("init-game", newGame, newLeaderboard)
  }


  return (
    <div className={styles["quiz-card"]}>
      <div className={styles["image-container"]}>
        <h3 className={styles["quiz-creator"]}>{quiz.creatorName}</h3>
        <h3 className={styles["quiz-date"]}>
          {moment(quiz.dateCreated).format('DD/MM/yyyy')}
        </h3>
        <h3 className={styles["quiz-question-number"]}>
          {isLanguageEnglish ? "Numbers of questions:" : "Số lượng câu hỏi:"}{" "}
          {quiz.numberOfQuestions}
        </h3>
        <div
          className={styles["quiz-image"]}
          style={{ backgroundImage: "url('" + quiz.backgroundImage + "')" }}
        ></div>
      </div>
      <div className={styles["card-body"]}>
        <h5>{isLanguageEnglish ? "Title" : "Tiêu đề"}</h5>
        <h2 className={styles["quiz-title"]}>{quiz.name}</h2>
        <h5>{isLanguageEnglish ? "Description" : "Mô tả"}</h5>
        <p className={styles["quiz-description"]}>{quiz.description}</p>
        <div className={styles["buttons"]}>
          <button className={styles["btn"]} onClick={addGame}>{isLanguageEnglish ? "Start a game" : "Bắt đầu trò chơi"}</button>
          <button className={styles["btn"]} onClick={openQuizPage}>{isLanguageEnglish ? "Detail" : "Chi tiết"}</button>
          <button className={styles["btn"]} onClick={() => dispatch(deleteQuiz(quiz._id))}>
            {isLanguageEnglish ? "Delete" : "Xoá"}</button>
        </div>
      </div>
    </div>
  )
}

export default MyQuiz
