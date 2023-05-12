import { useState } from "react";
import { Modal } from "./Modal";
import { Meta } from "@storybook/react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    //   ...defaultArgTypes,
  },
};

export default meta;

// type Story = StoryObj<typeof Modal>;

export const ModalRegular = () => {
  const [lightModalOpened, setLightModalOpened] = useState(false);
  const [darkModalOpened, setDarkModalOpened] = useState(false);

  return (
    <div className="flex">
      <Button onClick={() => setDarkModalOpened(true)} colorScheme="light">
        Open dark modal
      </Button>
      {darkModalOpened && (
        <Modal
          colorScheme="dark"
          isOpened={darkModalOpened}
          setIsOpened={setDarkModalOpened}
          title="Authentication"
          width="500px"
        >
          <Input label="Login" description="Email or username" mb="xl" />
          <Input
            label="Password"
            type="password"
            description="Password"
            mb="xl"
          />
          <Button fullWidth colorScheme="dark">
            Log in
          </Button>
        </Modal>
      )}
      <Button
        onClick={() => setLightModalOpened(true)}
        ml="xl"
        colorScheme="light"
      >
        Open light modal
      </Button>
      {lightModalOpened && (
        <Modal
          isOpened={lightModalOpened}
          setIsOpened={setLightModalOpened}
          title="Authentication"
          width="500px"
          colorScheme="light"
        >
          <Input label="Login" description="Email or username" mb="xl" />
          <Input
            label="Password"
            type="password"
            description="Password"
            mb="xl"
          />
          <Button fullWidth colorScheme="light">
            Log in
          </Button>
        </Modal>
      )}
    </div>
  );
};
