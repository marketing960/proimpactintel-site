import { Container } from "@/components/layout/container";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-28 pb-16 bg-background min-h-screen">
      <Container size="narrow">{children}</Container>
    </div>
  );
}
