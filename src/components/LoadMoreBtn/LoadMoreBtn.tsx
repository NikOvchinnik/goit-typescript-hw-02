import { FC } from "react";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={style.containerMore}>
      <button
        className={style.btnMore}
        type="button"
        onClick={() => {
          onLoadMore();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
