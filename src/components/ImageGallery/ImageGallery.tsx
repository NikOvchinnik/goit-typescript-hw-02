import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { imageObj } from "../../api.types";

interface ImageGalleryProps {
  images: imageObj[];
  onOpenModal: (url: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
  return (
    <ul className={style.galleryList}>
      {images.map((image) => {
        return (
          <li className={style.galleryItem} key={image.id}>
            <ImageCard image={image} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
