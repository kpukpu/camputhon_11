// src/Ranking.js
import React from 'react';
import '../styles/Ranking.css';

export const weeklyRankingData = [
    { rank: 1, nickname: "PlayerOne", weeklyScore: 1500 },
    { rank: 2, nickname: "PlayerTwo", weeklyScore: 1450 },
    { rank: 3, nickname: "PlayerThree", weeklyScore: 1400 },
    { rank: 4, nickname: "PlayerFour", weeklyScore: 1350 },
    { rank: 5, nickname: "PlayerFive", weeklyScore: 1300 },
];

const myNickname = "PlayerThree";

const Ranking = () => {
    const myRanking = weeklyRankingData.find(player => player.nickname === myNickname);
    const otherRankings = weeklyRankingData.filter(player => player.nickname !== myNickname);

    return (
        <div className="ranking-container">
            {myRanking && (
                <div className="my-ranking">
                    <h2>My ranking</h2>
                    <div className="my-ranking-item">
                        <span className="rank">{myRanking.rank}</span>
                        <span className="nickname">{myRanking.nickname}</span>
                        <span className="score">{myRanking.weeklyScore}</span>
                    </div>
                </div>
            )}
            <table>
                <thead>
                <tr>
                    <th>순위</th>
                    <th>닉네임</th>
                    <th>주간점수</th>
                </tr>
                </thead>
                <tbody>
                {otherRankings.map((player) => (
                    <tr key={player.rank}>
                        <td>{player.rank}</td>
                        <td>{player.nickname}</td>
                        <td>{player.weeklyScore}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;