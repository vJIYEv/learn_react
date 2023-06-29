function Drink({ name }) {
    let plant, caffeine, age;
    if (name === 'tea') {
      plant = 'leaf';
      caffeine = '15–70 mg/cup';
      age = '4,000+ years';
    } else if (name === 'coffee') {
      plant = 'bean';
      caffeine = '80–185 mg/cup';
      age = '1,000+ years';
    }
  
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{plant}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  