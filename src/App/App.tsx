import { Counter } from "@components/organisms/Counter/Counter";
import { Users } from "@components/organisms/Users/Users";
import { Posts } from "@components/organisms/Posts/Posts";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="header__container">Header</div>
      </header>
      <main className="main">
        <div className="main__container">
          <Counter></Counter>
          <Users></Users>
          <Posts></Posts>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">Footer</div>
      </footer>
    </>
  );
}
