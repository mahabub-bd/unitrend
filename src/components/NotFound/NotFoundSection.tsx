import Link from "next/link";
import HeadingPrimary from "@/components/HeadingPrimary/HeadingPrimary";
import HeadingSecondary from "@/components/HeadingSecondary/HeadingSecondary";

const NotFoundSection = () => (
  <div className="flex flex-col items-center justify-center min-h-[30vh] my-20">
    <HeadingPrimary title={404} />
    <HeadingSecondary title="opps! Page Not Found" />
    <p className="paragraph-2">
      The Page You are looking for doesn&apos;t exits{" "}
    </p>
    <div className="flex gap-12">
      <Link href="/" className="custom-button">
        {" Home"}
      </Link>
      <Link href="/contact" className="custom-button">
        {"Contact Us "}
      </Link>
    </div>
  </div>
);

export default NotFoundSection;
