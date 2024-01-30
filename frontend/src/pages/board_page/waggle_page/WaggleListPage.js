import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import BoardTopNavBar from "../../../components/Board/BoardTopNavBar";
import "../../../styles/BoardStyles/WaggleListStyle.css";
import WaggleItemCard from "../../../components/Board/WaggleItemCard";
import { formatRelativeTime } from "../../../components/Board/dateFormat";

function WaggleListPage() {
  const [waggleList, setWaggleList] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchWaggleList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/waggles/pages?page=${page}&size=30&sort=board.createAt,desc`,
      );
      const newWaggles = response.data.content;

      if (newWaggles.length === 0) {
        setHasMore(false);
      } else {
        const uniqueWaggles = newWaggles.filter(
          (newWaggle) =>
            !waggleList.some(
              (waggle) => waggle.board.boardId === newWaggle.board.boardId,
            ),
        );

        setWaggleList((prevWaggles) => [
          ...uniqueWaggles.reverse(),
          ...prevWaggles,
        ]);
      }
    } catch (error) {
      console.error("와글 목록을 불러오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  }, [page, waggleList]);

  useEffect(() => {
    if (hasMore) {
      fetchWaggleList();
    }
  }, [hasMore, fetchWaggleList]);

  const handleWriteWaggleClick = () => {
    navigate("/waggleRegist");
  };

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const distanceFromBottom = documentHeight - scrollTop - windowHeight;

    if (distanceFromBottom < 200 && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <BoardTopNavBar />
      <div className="waggle-header">
        <h2>와글와글 떠들어주세요</h2>
        <button onClick={handleWriteWaggleClick}>🖋글쓰기</button>
      </div>

      <div className="waggle-list">
        {waggleList.map((waggle, index) => (
          <WaggleItemCard
            key={index}
            waggle={waggle}
            formatRelativeTime={formatRelativeTime}
          />
        ))}
      </div>
    </div>
  );
}

export default WaggleListPage;
