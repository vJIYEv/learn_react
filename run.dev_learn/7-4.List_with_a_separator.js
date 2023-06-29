const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    const newLines = [];
    for (let i=0; i<poem.lines.length; i++) {
      newLines.push(<p key={'p'+i}>{poem.lines[i]}</p>);
      newLines.push(<hr key={'hr'+i}/>);
    }
    newLines.pop();
    return (
      <article>{newLines}</article>
    );
  }