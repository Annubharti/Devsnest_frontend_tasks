import { Provider } from "react-redux";
import store from "./redux/store";
import Forms from "./components/Forms";
import "./day_26_style.css"

const Day26App = () => {
  return (
    < div className="day26_body">
      <Provider store={store}>
        <div className="App">
          <h1 className="day26_h1">Redux THA </h1>
          <Forms />
        </div>
      </Provider>
    </div>
  );
};
export default Day26App;
