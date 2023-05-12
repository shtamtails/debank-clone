import { Meta } from "@storybook/react";
import { Button } from "../Button/Button";
import { RefObject, useRef, useState } from "react";
import {
  FiDownload,
  FiImage,
  FiMessageCircle,
  FiSearch,
  FiSettings,
  FiTrash,
} from "react-icons/fi";
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    //   ...defaultArgTypes,
  },
};

export default meta;

// type Story = StoryObj<typeof Menu>;

export const MenuRegular = () => {
  const [lightMenuVisible, setLightMenuVisible] = useState(false);
  const [darkMenuVisible, setDarkMenuVisible] = useState(false);
  const lightButtonRef: RefObject<HTMLButtonElement> = useRef(null);
  const darkButtonRef: RefObject<HTMLButtonElement> = useRef(null);

  return (
    <div className="flex">
      <Button
        mr="xl"
        ref={lightButtonRef}
        onClick={() => setLightMenuVisible(true)}
        colorScheme="light"
      >
        Toggle light menu
      </Button>
      {lightMenuVisible && (
        <Menu
          target={lightButtonRef}
          visible={lightMenuVisible}
          setVisible={setLightMenuVisible}
        >
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<FiSettings />}>Settings</Menu.Item>
          <Menu.Item icon={<FiMessageCircle />}>Messages</Menu.Item>
          <Menu.Item icon={<FiImage />}>Gallery</Menu.Item>
          <Menu.Item icon={<FiSearch />}>Search</Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger Zone</Menu.Label>
          <Menu.Item icon={<FiDownload />}>Transfer my data</Menu.Item>
          <Menu.Item icon={<FiTrash />}>Delete my account</Menu.Item>
        </Menu>
      )}
      <Button
        color="blue"
        ref={darkButtonRef}
        onClick={() => setDarkMenuVisible(true)}
        colorScheme="dark"
      >
        Toggle dark menu
      </Button>
      {darkMenuVisible && (
        <Menu
          target={darkButtonRef}
          visible={darkMenuVisible}
          setVisible={setDarkMenuVisible}
        >
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<FiSettings />}>Settings</Menu.Item>
          <Menu.Item icon={<FiMessageCircle />}>Messages</Menu.Item>
          <Menu.Item icon={<FiImage />}>Gallery</Menu.Item>
          <Menu.Item icon={<FiSearch />}>Search</Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger Zone</Menu.Label>
          <Menu.Item icon={<FiDownload />}>Transfer my data</Menu.Item>
          <Menu.Item icon={<FiTrash />}>Delete my account</Menu.Item>
        </Menu>
      )}
    </div>
  );
};
