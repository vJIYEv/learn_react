// 컴포넌트를 사용하여 작성
/* 
1. 코드가 간결해짐
2. 컴포넌트 이름을 보고 어떤 취지의 코드인지 파악하기 쉬움
3. 컴포넌트 내용만 수정하면 해당 컴포넌트를 사용된 부분이 전체 수정됨
*/
function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;