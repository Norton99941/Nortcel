import Image from "next/image";

export function Logo({
  width = 300,
  height = 95,
  className = "mx-auto",
  priority = true,
}: {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  // Imagen base64 temporal con los colores de NORTCEL MARKETING
  // Usamos esta imagen cuando la real no está disponible
  const placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC";
  
  return (
    <Image
      src="/images/nortcel-logo.jpg"
      alt="NORTCEL MARKETING - Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={(e) => {
        // Si la imagen real no se puede cargar, usamos el placeholder base64
        (e.target as any).onerror = null;
        (e.target as any).src = placeholderImage;
      }}
    />
  );
} 