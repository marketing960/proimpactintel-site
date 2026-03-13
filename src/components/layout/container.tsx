import { cn } from "@/lib/utils";

const sizes = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  narrow: "max-w-4xl",
  full: "max-w-full",
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof sizes;
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </div>
  );
}
