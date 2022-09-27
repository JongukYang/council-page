import React, { useState } from "react";
import { NoticeData } from "./apis/NoticeApi";
import "./Notice/Notice.css";
import Arrow2 from "../../images/Arrow2.png";

export default function NoticeArea() {
    const [isNotice, setIsNotice] = useState(true); //공지사항인지 회의록인지 체크하는 state
    const noticeData = [
        new NoticeData("개교 50주년 대동제 관련 공지", "2022-09-20"),
        new NoticeData("2022학년도 하반기 총학생회비 납부 안내", "2022-09-18"),
        new NoticeData("개교 50주년 기념 발전기금 플리마켓 운영", "2022-09-15"),
        new NoticeData(
            "후위 학위 수여식 학사복&학사모 대여 안내",
            "2022-09-13"
        ),
        new NoticeData("상상파크 연장 운영 안내", "2022-09-01"),
    ];
    const conversationList = [
        new NoticeData("상상파크 연장 운영 안내", "2022-09-01"),
        new NoticeData("개교 50주년 대동제 관련 공지", "2022-09-20"),
        new NoticeData("2022학년도 하반기 총학생회비 납부 안내", "2022-09-18"),
        new NoticeData("개교 50주년 기념 발전기금 플리마켓 운영", "2022-09-15"),
        new NoticeData(
            "후위 학위 수여식 학사복&학사모 대여 안내",
            "2022-09-13"
        ),
    ];
    return (
        <div className="NoticeArea">
            <ul className="section">
                <li
                    onClick={() => {
                        setIsNotice(true);
                    }}
                    style={{
                        color: isNotice === true ? "black" : "#D9D9D9",
                        // borderBottom: isNotice === true ? "2px solid black" : "none",
                    }}
                >
                    공지사항
                </li>
                <li
                    onClick={() => {
                        setIsNotice(false);
                    }}
                    style={{
                        color: isNotice === false ? "black" : "#D9D9D9",
                        // borderBottom: isNotice === false ? "2px solid black" : "none",
                    }}
                >
                    회의록
                </li>
                <img src={Arrow2} alt="화살표" className="arrow2" />
            </ul>
            <ul>
                {isNotice
                    ? conversationList.map((data) => {
                          return (
                              <li className="noticeList">
                                  <span className="noticeTitle">
                                      {data.title}
                                  </span>
                                  <span className="noticeDate">
                                      {data.date}
                                  </span>
                              </li>
                          );
                      })
                    : noticeData.map((data) => {
                          return (
                              <li className="noticeList">
                                  <span className="noticeTitle">
                                      {data.title}
                                  </span>
                                  <span className="noticeDate">
                                      {data.date}
                                  </span>
                              </li>
                          );
                      })}
            </ul>
        </div>
    );
}
