interface DottedBackgroundProps {
  children: React.ReactNode;
}

// components/DottedBackground.tsx
const DottedBackground: React.FC<DottedBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#000000]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Agregar pt-32 para dar espacio al navbar */}
      <div className="relative z-10 pt-32">{children}</div>
    </div>
  );
};

export default DottedBackground;
