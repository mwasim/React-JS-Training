import { GetImageUrl, GetImageUrlByImageId } from "./Utils";

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

export function NotableScientistProfile({person, imageSize = 70}) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={GetImageUrlByImageId(person.imageId)}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
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
      <Card>This is some text</Card>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={80} />
    </>
  );
}
