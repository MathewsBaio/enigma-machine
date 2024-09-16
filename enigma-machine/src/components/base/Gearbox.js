export default function Gearbox() {
  return (
    <div className="config-gearbox">
      <div className="configuration">
        <h1>Left Rotor</h1>
        <div>
          <label>Model</label>
          <select></select>
        </div>
        <div>
          <label>Ring</label>
          <select></select>
        </div>
      </div>
      <div className="configuration">
        <h1>Midle Rotor</h1>
      </div>
      <div className="configuration">
        <h1>Right Rotor</h1>
      </div>
    </div>
  );
}
