interface HeadingPrimaryProps {
  title: string | number;
  center?: boolean;
}

const HeadingPrimary = ({ title, center = false }: HeadingPrimaryProps) => (
  <h2
    className={`mb-4 text-primary font-base font-medium capitalize tracking-[0.02em] animate-tracking-in-contract text-4xl mobileL:text-[2.2rem] mobileL:leading-10 tablet:text-3xl tablet:leading-10 laptop:text-3xl laptopL:text-3xl desktop:text-[11rem] desktop:leading-[13rem] ${
      center ? "text-left" : "text-center"
    }`}
  >
    {title}
  </h2>
);

export default HeadingPrimary;
