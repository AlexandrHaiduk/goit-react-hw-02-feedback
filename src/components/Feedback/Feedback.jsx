import css from './styles.module.css';

export const Feedback = ({ data, addFeedback }) => {
  return (
    <>
      {data.map(name => {
        return (
          <button
            name={name}
            key={name}
            className={css.button}
            onClick={() => addFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </>
  );
};
