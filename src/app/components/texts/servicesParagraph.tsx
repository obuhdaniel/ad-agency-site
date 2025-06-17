import { ReactNode } from "react";

type StyledLinkProps = {
  href: string;
  children: ReactNode;
};

const StyledLink = ({ href, children }: StyledLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-purple-600 transition-colors duration-300"
    style={{ textDecorationThickness: "2px" }}
  >
    {typeof children === "string" ? (
      <span className="text-red-500">{children}</span>
    ) : (
      children
    )}
  </a>
);

export default function IntroParagraph() {
  return (
    <p className="text-lg md:text-xl mb-12 leading-relaxed">
      Discover the{" "}
      <StyledLink href="https://your-new-webpage.com">services</StyledLink>{" "}
      we offer to digitally transform our{" "}
      <StyledLink href="https://your-new-webpage.com">clients</StyledLink>{" "}
      businesses. Our core agency offerings include{" "}
      <StyledLink href="https://your-new-webpage.com">web development</StyledLink>,{" "}
      <StyledLink href="https://your-new-webpage.com">branding</StyledLink>,{" "}
      <StyledLink href="https://your-new-webpage.com">SEO</StyledLink>, and{" "}
      <StyledLink href="https://your-new-webpage.com">digital paid ads</StyledLink>, 
      along with several{" "}
      <StyledLink href="https://your-new-webpage.com">additional services</StyledLink>{" "}
      to meet your business needs.
    </p>
  );
}
