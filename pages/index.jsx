import { useState } from "react";

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}
export default function HomePage() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header />
      <button onClick={handleClick}>Likes({likes})</button>
    </div>
  );
}
