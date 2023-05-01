export const Stats = ({ data, statName, total, positiveCounter }) => {
  return (
    <>
      {data.map(name => {
        return (
          <p key={name}>
            {name}:{statName[name]}
          </p>
        );
      })}
      <p>Total:{total}</p>
      <p>Positive feedback: {positiveCounter} %</p>
    </>
  );
};
