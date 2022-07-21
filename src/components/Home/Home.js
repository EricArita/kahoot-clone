import React from "react"
import styles from "./home.module.css"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import { useSelector } from "react-redux"

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>
        <section className={styles["first-section"]}>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish
                  ? "Make learning awesome"
                  : "Làm cho việc học trở nên thú vị"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Quizzly delivers engaging learning to billions"
                  : "Quizzly cung cấp cho hàng triệu người dùng cách học hấp dẫn"}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Sign up for free"
                    : "Đăng ký miễn phí"}
                </a>
              </button>
            </div>
            <img src={img1} alt="" className={styles["banner-image"]} />
          </div>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Explore content" : "Khám phá nội dung"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Explore content and join one of the world’s largest educator communities."
                  : "Khám phá nội dung và tham gia một trong những cộng đồng nhà giáo dục lớn nhất thế giới."}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Check public quizes"
                    : "Xem các câu đố công khai"}
                </a>
              </button>
            </div>
            <img src={img2} alt="" className={styles["banner-image"]} />
          </div>
        </section>
        <section className={styles["second-section"]}>
          <div className={styles["section-background"]}></div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at school" : "Quizzly tại trường"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Engaging group and distance learning for teachers and students."
                  : "Tương tác nhóm và đào tạo từ xa cho giáo viên và học sinh."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at work" : "Quizzly tại nơi làm việc"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."
                  : "Cung cấp các khóa đào tạo, thuyết trình, cuộc họp và sự kiện trực tiếp hoặc trên bất kỳ nền tảng hội nghị truyền hình nào."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at home" : "Quizzly tại nhà"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Learning Apps and games for family fun or home study."
                  : "Ứng dụng và trò chơi học tập cho gia đình vui chơi hoặc học tập tại nhà."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <h1>
            {isLanguageEnglish
              ? "How does Quizzly work?"
              : "Quizzly hoạt động như thế nào?"}
          </h1>
          <div className={styles["card-container"]}>
            <div className={styles.card}>
              <img src={img3} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Create" : "Tạo mới"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                    : "Chỉ mất vài phút để tạo một trò chơi học tập hoặc câu đố đố vui về bất kỳ chủ đề nào, bằng bất kỳ ngôn ngữ nào."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img4} alt="" />
              <div className={styles["card-body"]}>
                <h1>
                  {isLanguageEnglish
                    ? "Host or share"
                    : "Tổ chức hoặc chia sẻ"}
                </h1>
                <p>
                  {isLanguageEnglish
                    ? "Host a live game with questions on a big screen or share a game with remote players."
                    : "Tổ chức trò chơi trực tiếp với các câu hỏi trên màn hình lớn hoặc chia sẻ trò chơi với những người chơi từ xa."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img5} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Play" : "Chơi"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "Game on! Join a Quizzly with a PIN provided by the host and answer questions on your device."
                    : "Trò chơi tiếp tục! Tham gia Quizzly bằng mã PIN do người chủ trì cung cấp và trả lời các câu hỏi trên thiết bị của bạn."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["card-button"]}>
            {isLanguageEnglish
              ? "Play Quizzly to see how it works."
              : "Chơi Quizzly để xem nó hoạt động như thế nào."}{" "}
            &nbsp;
            <a href="/">
              {isLanguageEnglish
                ? "Explore our public quizes"
                : "Khám phá các câu hỏi công khai của chúng tôi"}
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
