import { ReactNode } from "react";

interface BlueRectangle {
  text: string;
  children: ReactNode;
}

const BlueRectangle: React.FC<BlueRectangle> = ({ text, children }) => {
  return (
    <div className="flex flex-row justify-between align-middle bg-primary px-6 py-4 rounded-lg items-center">
      <h5 className="text-4xl font-serif text-white">{text}</h5>
      {children}
    </div>
  );
};

export default BlueRectangle;
