"use client";

import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Not Found - AutoLabs",
};

export default function NotFound() {
  const router = useRouter();

  const memes = [
    "https://media.giphy.com/media/yb0NtNTumhp16/giphy.gif",
    "https://media.giphy.com/media/U72UGZR5wNXzO8VYIW/giphy.gif",
    "https://media.giphy.com/media/Ta3v3I4GI1gH7Rqek6/giphy.gif",
    "https://media.giphy.com/media/uLnPIWsqIz2aA/giphy.gif",
    "https://media.giphy.com/media/mPytjcsG3XS4o/giphy.gif",
    "https://media.giphy.com/media/kHU8W94VS329y/giphy.gif",
    "https://media.giphy.com/media/8zYunr3Hg8XPq/giphy.gif",
  ];

  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  return (
    <main className="relative h-screen w-full">
      <Image src={randomMeme} alt="Not Found" className="-z-10" fill />
      <Link
        href="/"
        className="fixed left-1/2 top-12 -translate-x-1/2 text-center"
      >
        <Image
          src="/logo/logo-light.svg"
          alt="NSUT.AI Logo"
          width={150}
          height={120}
        />
      </Link>
      <div className="flex h-full w-full items-center justify-center bg-black/20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            Better Luck Next Time Loser
          </h1>
        </div>
      </div>
      <Link
        href="https://giphy.com"
        target="_blank"
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center text-xs font-semibold text-white/20 transition-colors hover:text-white"
      >
        GIFS via <span className="underline">GIPHY</span>
      </Link>
    </main>
  );
}