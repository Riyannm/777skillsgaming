import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - 777 Skills | Technical Support & Customer Service",
  description: "Comprehensive technical support, software services, and 24/7 customer support for skill game machines in San Antonio, TX.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
