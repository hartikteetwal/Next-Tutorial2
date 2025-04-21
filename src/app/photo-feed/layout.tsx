import "./styles.css";

export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="app-layout" style={{ position: "relative" }}>
      <main>{children}</main>
      {modal}
    </div>
  );
}
