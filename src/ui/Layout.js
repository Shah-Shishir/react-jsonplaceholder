import { useState } from "react";

import Header from "../components/Header";
import NavigationDrawer from "../components/NavigationDrawer";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header onToggle={toggle} />
      <NavigationDrawer isOpen={isOpen} onToggle={toggle} />
    </>
  );
}
