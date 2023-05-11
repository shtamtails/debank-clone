import { useState } from "react";
import { Button } from "./UI/Button/Button";
import { Input } from "./UI/Input/Input";
import { Modal } from "./UI/Modal/Modal";
import "./style/main.scss";

// TODO
// 1. Default props (style,className to all components)

function App() {
  const [lightModalOpened, setLightModalOpened] = useState(false);
  return (
    <div className="app">
      <Button onClick={() => setLightModalOpened(true)} ml="xl">
        Open light modal
      </Button>
      {lightModalOpened && (
        <Modal
          isOpened={lightModalOpened}
          setIsOpened={setLightModalOpened}
          title="Authentication"
          width="500px"
          variant="light"
        >
          <Input
            variant="light"
            label="Login"
            description="Email or username"
            mb="xl"
          />
          <Input
            variant="light"
            label="Password"
            type="password"
            description="Password"
            mb="xl"
          />
          <Button fullWidth variant="filled">
            Log in
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default App;
