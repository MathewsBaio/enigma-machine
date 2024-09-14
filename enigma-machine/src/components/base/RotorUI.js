export default function RotorUI({ rotor, open }) {
  return (
    <div className="rotor">
      {open && <button>+</button>}
      <p>{rotor.position + 1}</p>
      {open && <button>-</button>}
    </div>
  );
}
