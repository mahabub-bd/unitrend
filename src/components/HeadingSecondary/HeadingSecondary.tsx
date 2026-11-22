interface HeadingSecondaryProps {
  title: string | number;
  center?: boolean;
}

const HeadingSecondary = ({ title, center = false }: HeadingSecondaryProps) => (
  <h3
    className={`mb-4 text-secondary font-base font-semibold capitalize tracking-[0.04em] text-[1.75rem] tablet:text-base tablet:leading-5 laptopL:text-2xl desktop:text-[11rem] desktop:leading-[13rem] ${
      center ? "text-left" : "text-center"
    }`}
  >
    {title}
  </h3>
);

export default HeadingSecondary;
