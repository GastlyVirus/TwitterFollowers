import { useState } from "react";
import PropTypes from "prop-types";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "twFollowCard-button isFollowing"
    : "twFollowCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="twFollowCard">
      <header className="twFollowCard-header">
        <img
          className="twFollowCard-img"
          alt={userName}
          src={`https://unavatar.io/instagram/${userName}`}
        />
        <div className="twFollowCard-div">
          <strong>{children}</strong>
          <span className="twFollowCard-span">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="twFollowCard-text">{text}</span>
          <span className="twFollowCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  children: PropTypes.node.isRequired,
  userName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};
