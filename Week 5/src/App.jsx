// Q1
// function App() {
//   return (
//     <h1>Welcome the first session of React</h1>
//   );
// }
// export default App;



//Q2
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// function App() {
//   return (
//     <div>
//       <Home />
//       <About />
//       <Contact />
//     </div>
//   );
// }
// export default App;




// Q3
import CalculateScore from "./Components/CalculateScore";
function App() {
  return (
    <CalculateScore
      Name="Steeve"
      School="DNV Public School"
      total={284}
      goal={300}
    />
  );
}
export default App;