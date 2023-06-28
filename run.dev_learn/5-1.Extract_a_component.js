function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }

function Profile(props) {
  const name = props.name;
  const profileImage = props.profileImage
  const contents = props.contents 

  return (
    <section className="profile">
        <h2>{name}</h2>
        <img {...profileImage} />
        <ul>
          <li>
            <b>Profession : </b>
            {contents.profession}
          </li>
          <li>
            <b>Awards : {contents.awards.length} </b>
            ({contents.awards.join(', ')})
          </li>
          <li>
            <b>Discovered : </b>
            {contents.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        profileImage={{
          className: "avatar",
          src: getImageUrl('szV5sdG'),
          alt: "Maria Skłodowska-Curie",
          width: 70,
          height: 70
        }}
        contents={{
          profession:"physicist and chemist",
          awards:["Nobel Prize in Physics", 
                  "Nobel Prize in Chemistry", 
                  "Davy Medal", 
                  "Matteucci Medal"],
          discovered:"polonium (element)"
        }}
      />
      <Profile
        name="Katsuko Saruhashi"
        profileImage={{
          className: "avatar",
          src: getImageUrl('YfeOqp2'),
          alt: "Katsuko Saruhashi",
          width: 70,
          height: 70
        }}
        contents={{
          profession:"geochemist",
          awards:["Miyake Prize for geochemistry", 
                  "Tanaka Prize"],
          discovered:"a method for measuring carbon dioxide in seawater"
        }}
      />
    </div>
  );
}