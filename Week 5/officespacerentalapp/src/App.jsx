import officeImage from "./assets/office.jpg";

function App() {
  const offices = [
    {
      name: "Skyline Office",
      rent: 55000,
      address: "Hyderabad",
      image: officeImage,
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore",
      image: officeImage,
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai",
      image: officeImage,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            marginBottom: "20px",
            width: "350px",
          }}
        >
          <img
            src={office.image}
            alt="Office"
            width="300"
            height="200"
          />

          <h2>{office.name}</h2>

          <p>
            <b>Address:</b> {office.address}
          </p>

          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;