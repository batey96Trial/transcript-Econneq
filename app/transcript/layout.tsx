import LetterHead from "@/app/ui/LetterHead";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="
        bg-gray-100 shadow-[0_5px_40px_-20px_rgb(0,0,0/0.25),0_25px_40px_-20px_rgb(0,0,0/0.25)] 
        shadow-gray-600 rounded-none  sm:w-[794px] m-auto sm:h-[1123px]
         box-border font-open-sans font-normal
        ">
            <LetterHead />
            {children}
        </section>
    );
}