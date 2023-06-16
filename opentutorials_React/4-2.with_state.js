'use client';
import {useState} from 'react';  // state를 사용하기 위해 import

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
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{  // a 태그에 id 값을 주면 문자열이 됨
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));  // id를 숫자형으로 변환
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
    {id: 3, title:'javascript', body:'javascript is ...'}
  ];
    
  // mode에 따라 변하는 앱 만들기
  /*
  const _mode = useState{'WELCOME'};  // state 배열 ['WELCOME', f] 
  const mode = _mode[0];  // state 값 'WELCOME'
  const setMode = _mode[1];  // 함수 f
  */
  const [mode, setMode] = useState('WELCOME');  // 축약형

  // id에 따라 본문 내용 바꾸기
  const [id, setId] = useState(null);

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');  // 헤더 링크 클릭 시 모드 변경
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');  // 본문 링크 클릭 시 모드 변경
        setId(_id);  // 본문 링크 클릭 시 id 값 변경
      }}></Nav>
      {content} 
    </div>
      /*
      setMode 함수가 호출되면 App 컴포넌트가 다시 실행되면서
      setMode의 인수 -> useState의 인수가 됨
      */
  );
}

export default App;