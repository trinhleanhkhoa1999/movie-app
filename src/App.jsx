import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <p className="text-lg font-bold ">Hello world!</p>
    </div>
  );
}

export default App;
