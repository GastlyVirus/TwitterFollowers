import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "leomessi",
    name: "Lionel Andres Messi",
    initialIsFollowing: true,
  },
  {
    userName: "gastonedgardorocha",
    name: "Gaston Edgardo Rocha",
    initialIsFollowing: false,
  },
  {
    userName: "soniaelizabeth7779",
    name: "Sonia Elizabeth Cafir",
    initialIsFollowing: false,
  },
  {
    userName: "tntsportsar",
    name: "TNT Sports AR",
    initialIsFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard 
        key={userName}
        userName={userName} 
        initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
