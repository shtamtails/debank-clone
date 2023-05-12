import { useState } from "react";
import { Modal } from "./Modal";
import { Meta, StoryObj } from "@storybook/react";
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

type Story = StoryObj<typeof Modal>;

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
          <Input
            variant="dark"
            label="Login"
            description="Email or username"
            mb="xl"
          />
          <Input
            variant="dark"
            label="Password"
            type="password"
            description="Password"
            mb="xl"
          />
          <Button fullWidth variant="light" colorScheme="dark">
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
          variant="light"
          colorScheme="light"
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
          <Button fullWidth variant="light" colorScheme="light">
            Log in
          </Button>
        </Modal>
      )}
    </div>
  );
};
