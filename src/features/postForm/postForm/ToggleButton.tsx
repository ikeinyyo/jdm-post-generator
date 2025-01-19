type Props = {
  isToggled: boolean;
  onToggle: (value: boolean) => void;
};

export const ToggleButton = ({ isToggled, onToggle }: Props) => {
  return (
    <button
      onClick={() => onToggle(!isToggled)}
      className={`w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
        isToggled ? "bg-jdm" : "bg-black"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
          isToggled ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};
