import { imgBaseUrl } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={imgBaseUrl + "logo.png"}
        alt="Tiesen"
        width={200}
        height={200}
        priority
      />
    </main>
  );
}
