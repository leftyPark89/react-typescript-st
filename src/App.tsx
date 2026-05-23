import ButtonGroup from "./components/ButtonGroup.tsx";
export default function App() {
  const initialButtons = [
    {id: 1, label: "Button 1", icon: "🔥", isDisabled: false},
    {id: 2, label: "Button 2", icon: "💧", isDisabled: false},
    {id: 3, label: "Button 3", icon: "🌱", isDisabled: true},
    {id: 4, label: "Button 4", icon: "⚡", isDisabled: false},
  ];

  return (
    <>
      <ButtonGroup initialButtons={initialButtons}
      ></ButtonGroup>
    </>
  );
};