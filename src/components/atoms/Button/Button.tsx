import style from "./Button.module.css";

export default function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className={style.button}>
      Click Me
    </button>
  );
}
