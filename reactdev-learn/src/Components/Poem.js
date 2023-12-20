import { Fragment } from "react";
import "../styles/poem.css";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article className="poem">
      <h2>Poem</h2>
      {poem.lines.map((line, index) => {
        const hrElement = index < poem.lines.length - 1 && (
          <hr key={index + "-separator"} />
        );
        return (
          <Fragment key={index}>
            <p key={index + "-text"}>{line}</p>
            {hrElement}
          </Fragment>
        );
      })}
    </article>
  );
}
