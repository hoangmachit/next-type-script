import Link from "next/link";

export type LinkAdminProps = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkAdmin({
  href,
  children,
  ...props
}: LinkAdminProps) {
  const adminHref = `/admin${href.startsWith("/") ? "" : "/"}${href}`;
  return (
    <Link href={adminHref} {...props}>
      {children}
    </Link>
  );
}
