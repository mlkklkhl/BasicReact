function Staff(probs) {

  if (probs.probs[0] == "Nurse") {
    return (
      <div>
        <img
          src={require("../img/nurse.png")}
          width="100" height="100"
        />
        <p>Nurse {probs.probs[1]} {probs.probs[2]}</p>
      </div>
    );
  } else if (probs.probs[0] == "Doctor") {
    return (
      <div>
        <img
          src={require("../img/doctor.png")}
          width="100" height="100"
        />
        <p>Dr. {probs.probs[1]} {probs.probs[2]}</p>
      </div>
    );
  } 
}

export default function Profile() {
  return (
    <section>
      <h1>Staff Lists</h1>
      <Staff probs={["Nurse", "Florence", "Nightingale"]} />
      <Staff probs={["Doctor", "Myles", "Abbot"]} />
      <Staff probs={["Nurse", "Clara", "Barton"]} />
    </section>
  );
}