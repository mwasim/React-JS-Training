import React from "react";
import VisuallyHidden from "./utils/visually_hidden";

const Friend = ({ isOnline, name }) => {
  return (
    <li className="friend">
      {isOnline && (
        <div
          style={{
            color: "green",
            display: "inline-block",
            marginRight: 5,
          }}
        >
          *
        </div>
      )}
      {name}
      {isOnline && <VisuallyHidden> (Online)</VisuallyHidden>}
    </li>
  );
};

const FriendsListWithScreenReaderSupport = () => {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  );
};

export default FriendsListWithScreenReaderSupport;
