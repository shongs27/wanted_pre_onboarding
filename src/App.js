import styles from "./app.module.scss";

import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";

function App() {
  return (
    <div className={styles.topContainer}>
      <h1>Wanted frontend onBoarding</h1>

      <div>1. toggle</div>
      <Toggle />

      <div>2. tab</div>
      <Tab />

      <div>3. slider</div>
      <Slider />

      <div>4. Input</div>
      <Input />

      {/* <div>5. Dropzone</div> */}
      {/* <Dropzone /> */}
    </div>
  );
}

export default App;
