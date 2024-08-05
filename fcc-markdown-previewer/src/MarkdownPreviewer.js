import React, { useEffect, useState } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    const previewElement = document.getElementById("preview");
    previewElement.innerHTML = marked(markdown);
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleMarkdownChange}
        cols={8}
        rows={7}
      />
      <div id="preview">{markdown}</div>
    </div>
  );
};

const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline Code\`
\`\`\`
const codeBlock = () => {
  console.log('Code Block');
};
\`\`\`
- List Item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold Text**`;

export default MarkdownPreviewer;
