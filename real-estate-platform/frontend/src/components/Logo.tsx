import Image from "next/image";

interface LogoProps {
  className?: string;
  useImage?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", useImage = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl", 
    lg: "text-6xl"
  };

  if (useImage) {
    return (
      <div className={`flex items-center ${className}`}>
        <Image
          src="/amido-logo.svg"
          alt="AMIDO"
          width={size === "sm" ? 120 : size === "md" ? 160 : 200}
          height={size === "sm" ? 36 : size === "md" ? 48 : 60}
          className="h-auto"
        />
      </div>
    );
  }

  return (
    <h1 
      className={`font-bold text-white ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: '0.15em',
        fontWeight: '600'
      }}
    >
      AMIDO
    </h1>
  );
}

