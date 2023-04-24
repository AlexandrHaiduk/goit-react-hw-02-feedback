export const Feedback = ({ data, addFeedback }) => {
  return (
    <>
      {data.map((name, i) => {
        return (
          <button name={name} key={i + 1} onClick={() => addFeedback(name)}>
            {name}
          </button>
        );
      })}
    </>
  );
};
