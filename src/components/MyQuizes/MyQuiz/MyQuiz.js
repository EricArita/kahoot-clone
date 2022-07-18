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

  const addGame = async () => {
    let gameData = {
      quizId: quiz._id,
      isLive: true,
      pin: String(Math.floor(Math.random() * 9000) + 1000),
    }
    // const newGame = await dispatch(createGame(gameData, history))
    // let leaderboardData = { gameId: newGame._id, playerResultList: [] }

    // const newLeaderboard = await dispatch(createLeaderboard(leaderboardData))
    // socket.emit("init-game", newGame, newLeaderboard)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    quiz = {
      //dateCreated: '2022-07-20Z00:00:00'
      backgroundImage: '',
      tags: [''],
      _id: 1,
      name: '1asff',
      numberOfQuestions: 1,
      description: '',
      creatorName: ''
    }
  }, [])

  return (
    <div className={styles["quiz-card"]} onClick={openQuizPage}>
      <div className={styles["image-container"]}>
        <h3 className={styles["quiz-creator"]}>{quiz.creatorName}</h3>
        <h3 className={styles["quiz-date"]}>
          {moment(quiz.dateCreated).fromNow()}
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
        {/* <div>
          <h4 className={styles["quiz-tags"]}>
            {quiz.tags.map((tag) => `#${tag} `)}
          </h4>
          <div className={styles["card-buttons"]}>
            <button onClick={addGame}>
              {isLanguageEnglish ? "Start a game" : "Bắt đầu trò chơi"}
            </button>
            <button onClick={() => dispatch(deleteQuiz(quiz._id))}>
              <DeleteIcon fontSize="small" />
              {isLanguageEnglish ? "Delete" : "Xoá"}
            </button>
          </div>
        </div> */}
        <h5>Title</h5>
        <h2 className={styles["quiz-title"]}>{quiz.name}</h2>
        <h5>description</h5>
        <p className={styles["quiz-description"]}>{quiz.description}</p>
        <div className={styles["buttons"]}>
          <button className={styles["btn"]} onClick={addGame}>{isLanguageEnglish ? "Start a game" : "Bắt đầu trò chơi"}</button>
          <button className={styles["btn"]} onClick={() => dispatch(deleteQuiz(quiz._id))}>
            {isLanguageEnglish ? "Delete" : "Xoá"}</button>
        </div>
      </div>
    </div>
    //   <div class="courses-container">
    //   <div class="course">
    // <div class="course-preview">
    //   <h6>Course</h6>
    //   <h2>JavaScript Fundamentals</h2>
    //   <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
    // </div>
    //     <div class="course-info">
    //       <div class="progress-container">
    //         <div class="progress"></div>
    //         <span class="progress-text">
    //           6/9 Challenges
    //         </span>
    //       </div>
    //       <h6>Chapter 4</h6>
    //       <h2>Callbacks & Closures</h2>
    //       <button class="btn">Continue</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MyQuiz
