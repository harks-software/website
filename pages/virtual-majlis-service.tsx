import Image from "next/image";
import { ParallaxTransparentBackground } from "../components/parallax-transparent-background";
import { BsFillCameraFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { MainLayout } from "../layouts/main";

export default function VirtualMajlisService() {
  return (
    <MainLayout title="Virtual Majlis Service">
      <div className="bg-beige.300 py-56">
        <h1 className="w-full text-center text-7xl font-bold">COMING SOON!</h1>
      </div>
    </MainLayout>
  );
}
