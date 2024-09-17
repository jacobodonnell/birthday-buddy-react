import { List } from './List';
import { useState } from 'react';
import data from './data.js';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
          style={{ marginTop: '1rem' }}
        >
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
