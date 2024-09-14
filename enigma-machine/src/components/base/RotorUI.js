export default function RotorUI({ rotor, open }) {
  return (
    <div className="rotor">
      <button className="top-rotor-btn">+</button>
      <p>{rotor.position + 1}</p>
      <button className="bot-rotor-btn">-</button>
    </div>
  );
}
