import { Person } from './Person';

export function List({ people }) {
  return (
    <ul>
      {people.map(person => {
        return <Person key={person.id} {...person} />;
      })}
    </ul>
  );
}
