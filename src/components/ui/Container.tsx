import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div
    className={cn(
      "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:max-w-[1360px] 2xl:max-w-[1680px]",
      className
    )}
  >
    {children}
  </div>
);

export default Container;
