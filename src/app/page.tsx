import Image from "next/image";
import Background from '@/components/background/background';
//import Menu from '@/components/xmb-menu/xmb-menu';
import Clock from "@/components/clock/Clock";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import('@/components/xmb-menu/xmb-menu'), { ssr: false })

export default function Home() {
  return (
    <>
      <Background />
      <Clock />
      <Menu />
    </>
  );
}
