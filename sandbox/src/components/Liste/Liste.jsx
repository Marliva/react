import "./Liste.css";

const bikini = ["Bob", "Patrick", "Carlos", "Sandy", "Gary"];

export const Liste = () => {
  return (
    <>
    <h5>Les fiers habitants de Bikini Bottom</h5>
    <ul className="Liste">
      {/* map est une boucle quasiment identique à foreach que je peux utiliser dans du js */}
      {/* {bikini.map((value, index) => (
        <li key={index}>{value}</li>
      ))} */}

      {/* Voici une version développée de la callback ci-dessus */}
      {bikini.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
    </>
  );
};