import "react-photo-view/dist/react-photo-view.css"; // Import the default CSS
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Languages from "./components/Languages/Languages";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="container mx-auto">
      <Home></Home>
      <Timeline></Timeline>
      <Languages></Languages>
    </div>
  );
}

export default App;
