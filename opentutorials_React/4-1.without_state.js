'use client';

// state 추가하기
/* 
컴포넌트 함수를 다시 실행해서 새로운 리턴값을 만들어주는 또 하나의 데이터
함수 안에서 일어나는 이벤트에 따라서 앱이 변경되게 함
*/
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
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
    
  // mode에 따라 변하는 앱 만들기
  let mode = 'WELCOME';  // 초기화
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    content = <Article title='Read' body="Hello, Read"></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        mode = 'WELCOME';  // 헤더 링크 클릭 시 모드 변경?
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        mode = 'READ';  // 본문 링크 클릭 시 모드 변경?
      }}></Nav>
      {content} 
    </div>
      /*
      return할 때 이미 content가 정해져 있고
      mode를 재할당해도 함수가 재실행되지 않기 때문에
      앱 내용은 바뀌지 않는다
      */
  );
}

export default App;