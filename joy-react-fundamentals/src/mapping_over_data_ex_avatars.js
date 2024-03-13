import React from "react";

const avatarItems = [
  {
    id: "001",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

const Avatar = ({ id, alt }) => {
  const avatarUrl = `https://sandpack-bundler.vercel.app/img/avatars/${id}.png`;
  return <img src={avatarUrl} alt={alt} />;
};

const MappingOverDataAvatarDemo = () => {
  return (
    <div className="avatar-set">
      {avatarItems.map(({ id, alt }) => (
        <Avatar key={id} id={id} alt={alt} />
      ))}
    </div>
  );
};

export default MappingOverDataAvatarDemo;
