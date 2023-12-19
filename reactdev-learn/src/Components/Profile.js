import { GetImageUrl } from "./Utils";

function Avatar({ person, size = 100 }) {
  //const imageUrl = `https://i.imgur.com/${person.imageId}.jpg`;

  return (
    <img
      className="avatar"
      src={GetImageUrl({ person })}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

//NOTE: This functon/component (Card) received JSX as an argument
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function NamedPorfile() {
  return (
    <Avatar person={{ name: "Alan L. Hart", imageId: "OKS67lh" }} size={50} />
  );
}

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          size={100}
        />
      </Card>
      <Card>
        This is some text
      </Card>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={80} />
    </>
  );
}
