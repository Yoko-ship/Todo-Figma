import SideMenu from "@/components/SideMenu";

export default function TaskLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>
    <SideMenu/>
    {children}
  </>;
}
