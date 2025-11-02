import Image from "next/image";

const LetterHead = () => {
    return (
        <section className="flex flex-col  relative ">
            <div className=" h-3/5 relative flex flex-row justify-between md:px-10 md:py-2">
                <div className="flex flex-col text-center">
                    <h2 className="text-sm font-semibold">Republic of Cameroon</h2>
                    <h2 className="text-xs italic">Peace – Work – Fatherland</h2>
                    <h2 className="text-sm font-semibold">Ministry of Higher Education</h2>
                    <h2 className="text-sm font-semibold">Republic of Cameroon</h2>
                    <h2 className="text-xs italic">Peace – Work – Fatherland</h2>
                </div>
                <div className="shrink-0">
                    <Image
                        src="/logo_minesupp.png"
                        alt="minesup_logo"
                        width={100}
                        height={100}
                        style={{ objectFit: 'contain' }}
                    />

                </div>

                <div className="flex flex-col text-center">
                    <h2 className="text-sm font-semibold">République du Cameroun</h2>
                    <h2 className="text-xs italic">Paix – Travail – Patrie</h2>
                    <h2 className="text-sm font-semibold">Ministère de l’Enseignement Supérieur</h2>
                    <h2 className="text-sm font-semibold">Republic of Cameroon</h2>
                    <h2 className="text-xs italic">Peace – Work – Fatherland</h2>
                </div>
            </div>



            <div className="h-2/5 flex flex-col text-center lg:mr-3">
                <h1 className=" font-open-sans font-semibold text-xl">Success Testimonial/Transcript*</h1>
                <h2 className="text-xs font-light capitalize">Attestation de reussite/Releve de Notes*</h2>
                <h2 className="font-open-sans font-semibold text-sm">The Minister of State, Minister of Higher Education certifies that:</h2>
                <h2 className=" text-xs font-normal capitalize">Le Ministre d’État, Ministre de l’Enseignement supérieur soussigne,atteste que:</h2>

            </div>

        </section>
    );
}

export default LetterHead;