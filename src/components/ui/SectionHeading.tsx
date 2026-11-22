import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) => {
  const centered = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]",
            isLight ? "text-golden" : "text-primary"
          )}
        >
          <span
            className={cn(
              "h-px w-7",
              isLight ? "bg-golden/70" : "bg-primary/40"
            )}
          />
          {eyebrow}
          {centered && (
            <span
              className={cn(
                "h-px w-7",
                isLight ? "bg-golden/70" : "bg-primary/40"
              )}
            />
          )}
        </span>
      )}

      <h2
        className={cn(
          "mt-5 text-[clamp(2rem,3.4vw,3.15rem)] font-base font-semibold leading-[1.12] tracking-[-0.02em]",
          isLight ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-7 2xl:max-w-3xl 2xl:text-base",
            isLight ? "text-white/65" : "text-softgray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
