'use client';

// event 기능 추가하기
/* 
컴포넌트에서 어떤 일이 발생했을 때 사용자가 추가적으로 작업을 처리할 수 있도록 함 
속성값으로 함수를 주어 event 기능을 만들 수 있음 (html 문법 X. 나중에 컨버터가 html로 바꿔줌)
*/
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{  // 화살표 함수
      event.preventDefault();  // 클릭해도 reload가 일어나지 않음
      props.onChangeMode();  // prop으로 준 함수
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{  // 화살표함수
        event.preventDefault();
        props.onChangeMode(event.target.id);
        /*
        event: event 객체
        event.target: 이벤트를 유발시킨 태그 (<a> 태그)
        event.target.id: 이벤트 타겟 테그의 id
        */
      }}>{t.title}</a>
    </li>)
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
  const topics = [
    {id: 1, title:'html', body:'html is ...'},
    {id: 2, title:'css', body:'css is ...'},
    {id: 3, title:'javascript', body:'javascript is ...'},
  ];

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{  // 화살표함수
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{  // 화살표함수
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;