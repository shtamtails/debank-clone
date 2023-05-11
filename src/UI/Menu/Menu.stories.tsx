import { Meta, StoryObj } from "@storybook/react";
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

type Story = StoryObj<typeof Menu>;

export const MenuRegular = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const buttonRef: RefObject<HTMLButtonElement> = useRef(null);

  return (
    <>
      <Button ref={buttonRef} onClick={() => setMenuVisible(true)}>
        Toggle menu
      </Button>
      {menuVisible && (
        <Menu
          target={buttonRef}
          visible={menuVisible}
          setVisible={setMenuVisible}
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
    </>
  );
};
