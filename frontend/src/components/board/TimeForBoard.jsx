import React, { useState } from "react";
import {
  BadgeImg,
  OnlyTime,
} from "../../styles/match-styles/MatchScheduleStyle";

export default function TimeForBoard({ match, onMatchClick }) {
  const handleOnClick = () => {
    if (onMatchClick) {
      onMatchClick(match.matchId);
    }
  };

  const srcFirst = `${process.env.PUBLIC_URL}/badge/badge`;

  let homeTeamName = `${match.homeTeamName}`.substring(0, 2);
  let awayTeamName = `${match.awayTeamName}`.substring(0, 2);
  if (
    `${match.homeTeamName}`.includes("서울") ||
    `${match.homeTeamName}`.includes("수원")
  ) {
    homeTeamName = `${match.homeTeamName}`.substring(0, 4);
  }
  if (
    `${match.awayTeamName}`.includes("서울") ||
    `${match.awayTeamName}`.includes("수원")
  ) {
    awayTeamName = `${match.awayTeamName}`.substring(0, 4);
  }

  return (
    <OnlyTime>
      <div className="time" onClick={handleOnClick}>
        <div className="timeLeft">
          {new Date(match.matchAt).toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
        <div className="timeRight">
          <div className="team">
            <div>
              <BadgeImg
                src={`${srcFirst}${match.homeTeamId}.png`}
                alt="homeTeamImg"
              />
              {homeTeamName}
            </div>
            <div>
              <BadgeImg
                src={`${srcFirst}${match.awayTeamId}.png`}
                alt="awayTeamImg"
              />
              {awayTeamName}
            </div>
          </div>
          <div className="status">
            <div className="score">
              <div
                style={{
                  fontWeight:
                    match.homeScore > match.awayScore ? "bold" : "normal",
                }}
              >
                {match.homeScore}
              </div>
              <div
                style={{
                  fontWeight:
                    match.awayScore > match.homeScore ? "bold" : "normal",
                }}
              >
                {match.awayScore}
              </div>
            </div>
            <div className={`statusText ${match.status}`}>
              <div>
                {match.status === "upcoming"
                  ? "경기 예정"
                  : match.status === "during"
                    ? "경기 중"
                    : "경기 종료"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OnlyTime>
  );
}