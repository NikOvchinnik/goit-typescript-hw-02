import { useState, useEffect } from "react";
import { fetchImages } from "../../api";
import style from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import {imageObj, imagesFetch } from "../../api.types";

const App: React.FC = () => {
  const [images, setImages] = useState<imageObj[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!searchQuery) return;
      try {
        setLoading(true);
        setError(false);
        const data: imagesFetch = await fetchImages(searchQuery, page);
        setTotalPage(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const onSearch = (searchValue: string): void => {
    setImages([]);
    setPage(1);
    setSearchQuery(searchValue);
  };

  const onLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  function onOpenModal(img: string): void {
    setModalIsOpen(true);
    setModalImg(img);
  }

  function onCloseModal(): void {
    setModalIsOpen(false);
  }

  return (
    <div className={style.container}>
      <SearchBar onSubmit={onSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {totalPage > page && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          modalImg={modalImg}
          modalIsOpen={modalIsOpen}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export default App;
