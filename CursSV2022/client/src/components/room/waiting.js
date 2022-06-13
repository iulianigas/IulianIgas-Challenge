import NumberGenerator from "./number_generator";

const Waiting = () => {
  return (
    <>
      <div className="card p15">Waiting for another player...</div>
      <NumberGenerator />
    </>
  );
};

export default Waiting;
