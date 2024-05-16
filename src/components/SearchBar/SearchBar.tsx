import { FC, FormEvent } from "react";
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = (): string => toast.error("Your form is empty!");

interface SearchBarProps {
  onSubmit: (searchValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const searchValue =
      (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ||
      "";
    if (searchValue === "") {
      notify();
      return;
    }
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <header>
      <Toaster />
      <form className={style.headerForm} onSubmit={handleSubmit}>
        <input
          className={style.headerInput}
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.headerBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
