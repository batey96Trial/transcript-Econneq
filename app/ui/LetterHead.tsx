import Image from "next/image";

export default function LetterHead() {
    return (
        <section className="flex flex-col relative ">
            <div className=" flex justify-between md:px-10 md:py-2">
                <div className="flex flex-col text-center">
                    <h2 className="text-sm font-semibold">Republic of Cameroon</h2>
                    <span className="text-xs italic leading-tight">Peace – Work – Fatherland</span>
                    <h2 className="text-sm font-semibold leading-tight">Ministry of Higher Education</h2>
                    <span className="text-xs font-semibold leading-tight">----------</span>
                    <h2 className="text-xs italic leading-tight">Fax: (237) 222 22 13 70</h2>
                    <h2 className="text-xs italic leading-tight">BP:1739 Yaounde</h2>
                    <span className="text-xs font-semibold leading-tight">----------</span>


                </div>
                <Image
                    src="/logo_minesupp.png"
                    alt="minesup_logo"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain' }}
                />


                <div className="flex flex-col text-center flex-wrap">
                    <h2 className="text-sm font-semibold">République du Cameroun</h2>
                    <span className="text-xs italic leading-tight">Paix – Travail – Patrie</span>
                    <h2 className="text-sm font-semibold leading-tight">Ministère de l’Enseignement Supérieur</h2>
                    <span className="text-xs font-semibold leading-tight">----------</span>

                    <span className="text-xs italic leading-tight">Telephone: (237) 222 23 02 95</span>
                    <span className="text-xs italic leading-tight">Email: dcoa@minesup.gov.cm</span>
                    <span className="text-xs font-semibold leading-tight">----------</span>
                </div>
                
            </div>



            <div className="h-2/5 flex flex-col text-center lg:mr-3">
                <h1 className=" font-mono font-semibold text-base">Success Testimonial/Transcript*</h1>
                <h2 className="text-xs font-light capitalize">Attestation de reussite/Releve de Notes*</h2>
                <h2 className="font-open-sans font-semibold">The Minister of State, Minister of Higher Education certifies that:</h2>
                <h2 className=" text-xs font-normal capitalize">Le Ministre d’État, Ministre de l’Enseignement supérieur soussigne,atteste que:</h2>

            </div>

        </section>
    );
}