export const Stats = ({ data, statName, total, positiveCounter }) => {
  return (
    <>
      {data.map((name, i) => {
        return (
          <p key={i + 1}>
            {name}:{statName[name]}
          </p>
        );
      })}
      <p>Total:{total}</p>
      <p>Positive feedback: {positiveCounter} %</p>
    </>
  );
};
