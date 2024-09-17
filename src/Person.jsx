export function Person({ image, name, age }) {
  return (
    <li
      style={{
        margin: '.5rem 0 1rem',
      }}
      className="person"
    >
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years old</p>
      </div>
    </li>
  );
}
