import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "light" | "gold";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withIcon?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_14px_30px_-16px_rgba(105,1,14,0.8)] hover:-translate-y-0.5 hover:bg-secondary",
  outline:
    "border border-primary/25 text-primary hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white",
  light:
    "border border-white/30 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary",
  gold: "bg-golden text-primary hover:-translate-y-0.5 hover:bg-cream",
};

const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className,
  withIcon = true,
  ariaLabel,
}: ButtonLinkProps) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {children}
      {withIcon && (
        <FiArrowUpRight
          aria-hidden="true"
          className="text-[1.05em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cn("group", classes)} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn("group", classes)}
      aria-label={ariaLabel}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
};

export default ButtonLink;
