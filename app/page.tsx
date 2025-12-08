import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 w-full">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-20 items-center px-6 md:px-12 mt-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col min-w-sm gap-4">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight ">
            Feed a University Student Today
          </h1>

          <p className="text-gray-600 max-w-md">
            Many students attend classes on an empty stomach. Your support
            provides affordable meals helping them stay focused, healthy, and
            ready to succeed.
          </p>

          <Button asChild className="plate button w-fit mt-2">
            <Link href="">Donate a Plate</Link>
          </Button>

          {/* SOCIAL PROOF */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>FX</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>GL</AvatarFallback>
              </Avatar>
            </div>

            <small className="text-gray-500">
              Join Felix and 385 others in this journey
            </small>
          </div>
        </div>

        {/* RIGHT SIDE */}
         <Image
  src="/student2.png"
  alt="student"
  width={300}
  height={550}
  priority
  className="
    w-full 
    md:w-[500px]       /* Larger on desktops */
    lg:w-[385px]       /* Even slightly bigger on large screens */
    xl:w-[620px]       /* Hero-feel on extra large monitors */
    mix-blend-darken 
    dark:mix-blend-difference
  "
/>
      

        
      </section>

      {/* ============================
          HOW IT WORKS
      ============================ */}
      <main className="container mx-auto max-w-7xl px-6 md:px-12">
        <section className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold text-gray-800">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardHeader className="flex flex-col gap-2">
                  <GraduationCap className="text-plate-primary-community-green" size={40} />
                  <CardTitle className="text-lg font-semibold">Step {i}</CardTitle>
                </CardHeader>

                <CardContent className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Necessitatibus dolore incidunt dignissimos sequi quisquam nobis.
                </CardContent>
              </Card>
            ))}

          </div>
        </section>
      </main>

      {/* ============================
          WHY YOUR SUPPORT MATTERS
      ============================ */}
      <section className="w-full bg-[#F3FBF4]

 py-12">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 px-6 md:px-12">

          <Image
            src="/highlight.jpeg"
            width={800}
            height={400}
            alt="highlight"
            priority
            className="rounded-xl w-full lg:w-1/2"
          />

          <div className="flex flex-col gap-4 text-gray-600 lg:w-1/2">
            <h2 className="text-xl font-semibold text-plate-primary-community-green">
              WHY YOUR SUPPORT MATTERS
            </h2>

            <p className="leading-relaxed">
              Meet Marie and her friends,a second-year university student.<br/> Some days,
              she skips meal just to pay for transportation to class <br/>— making it
              nearly impossible to stay focused during lectures.
            </p>

            <strong className="text-gray-700">
              Your 1 plate = 1 saved day for a future leader
            </strong>

            <Button asChild className="plate button w-fit mt-2">
              <Link href="">Donate a Plate</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* ============================
          FULL-WIDTH VISUAL SECTION
      ============================ */}
      <section className="relative">
  <Image
    src="/n2.jpg"
    width={400}
    height={300}
    alt="hero"
    priority
    quality={100}
    className="w-full opacity-60 aspect-auto"
  />

  {/* Stats Overlay */}
  
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full flex justify-center px-4 gap-6">
  <div className="w-60 h-32 bg-black/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-slate-50">
    <span className="text-3xl font-bold">12,450+</span>
    <span className="text-sm opacity-90">Donors & Partners</span>
  </div>

  <div className="w-60 h-32 bg-black/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-slate-50">
    <span className="text-3xl font-bold">820+</span>
    <span className="text-sm opacity-90">Students Impacted</span>
  </div>

  <div className="w-60 h-32 bg-black/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-slate-50">
    <span className="text-3xl font-bold">500 FCFA</span>
    <span className="text-sm opacity-90">Cost a Plate</span>
  </div>

  <div className="w-60 h-32 bg-black/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-slate-50">
    <span className="text-3xl font-bold">45+</span>
    <span className="text-sm opacity-90">Partner Restaurants</span>
  </div>
</div>

</section>

    </div>
  );
}
