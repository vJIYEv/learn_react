// props (속성) 추가하기
/* 
태그에 속성을 추가하면 객체 형태로 함수의 인수(props)가 됨
html 구문 내에 중괄호 {}를 사용하면 표현식으로 해석됨 
*/
function Header(props) {
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  // 동적으로 태그 만들기  
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)  // 자동으로 생성한 태그는 추적하기 위한 고유한 key가 필요하다
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  // topics: Nav 내 list 구현에 사용될 정보
  const topics = [
    {id: 1, title:'html', body:'html is ...'},
    {id: 2, title:'css', body:'css is ...'},
    {id: 3, title:'javascript', body:'javascript is ...'},
  ];

  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;