'use client';
import {useState} from 'react';

// create
/* 
대부분의 어플리케이션은 생성, 읽기, 추가, 삭제의 4가지 기능을 가지고 있다
생성: create 버튼을 누르면 상세보기 페이지 글이 생성되는 form 만들기
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
        props.onChangeMode(Number(event.target.id));
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

function Create(props) {  // Create 태그: submit form UI
  return <article>
    <h2>Create</h2>
    <form onSubmit={(event)=>{
      // onSubmit: submit 버튼을 눌렀을 때 발생하는 이벤트
      // event: 이벤트 객체
      // event.target: 이벤트 타겟 = form 태그
      // event.target.title: form 태그 내에 name="title"인 input 태그
      // event.target.title.value: name="title"의 값 = 사용자가 제출한 값
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);  // onCreate 함수 호출 <- title, body 값 전달
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>  {/* title 입력 */}
      <p><textarea name="body" placeholder="body"></textarea></p>  {/* body 입력 */}
      <p><input type="submit" value="Create"/></p>  {/* submit 버튼 클릭하여 제출 */}
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);  // 새 항목의 id
  const [topics, setTopics] = useState([  // topics를 state로 전환 - 새로 생성된 내용을 추가할 수 있다
    {id: 1, title:'html', body:'html is ...'},
    {id: 2, title:'css', body:'css is ...'},
    {id: 3, title:'javascript', body:'javascript is ...'}
  ]);

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

  /* CREATE 모드 */
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      // onCreate: 폼에서 작성한 title, body의 내용을 받아서 동작을 수행하는 함수
      
      // 1. topic 추가
      /* state 값을 변경할 때
       * primitive type 값은 변경하고자 하는 값 그대로 set
       * reference type 값은 원본 데이터(객체)를 복제한 후 변경해야 함
       * setValue는 입력된 데이터가 원본 value와 다른 데이터일 때만 컴포넌트를 새로 렌더링하기 때문 */
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics];  // topics 복사
      newTopics.push(newTopic);
      setTopics(newTopics);
      
      // 2. 생성한 상세 페이지로 바로 이동
      setMode('READ');  // 모드 변경 - 상세보기 글을 보여줌
      setId(nextId);  // 현재 글의 id를 새 글의 id로 변경 - 새로 추가한 항목의 글을 보여줌
      setNextId(nextId+1);  // 다음에 추가할 항목의 id 새롭게 설정
    }}></Create>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}

      {/* create 페이지로 이동하는 링크 
        * 새 페이지로 이동하는 것이 아니라 모드의 값을 바꾸어 create 페이지로 바꿈
        * create 링크를 누르면 새 글을 생성할 수 있는 제출 폼 UI가 나옴 */}
      <a href="/create" onClick={(event)=>{
        event.preventDefault();
        setMode('CREATE');  // 모드 변경
      }}>Create</a>

    </div>
  );
}

export default App;