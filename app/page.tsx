'use client'
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="flex-col gap-5 flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href='/transcript' className=" bg-teal-500 p-3 text-white rounded-sm hover:shadow-2xl">View Transcript</Link>
      ----OR----
                        <Link className="text-green-500 underline" href="/transcript/pdf">View the PDF downloadable format</Link>

    </div>
    </>
  );
}
