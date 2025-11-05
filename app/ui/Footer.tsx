import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <section className="grid grid-cols-5 gap-0 leading-tight">
                <p className="col-span-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.sciunt culpa iiae au voluptas numquam earumxime! Velit animi odit porro!</p>
                <p className="col-start-3 col-span-3 row-start-2  text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.sciunt culpa iiae au voluptas nddd</p>
                <p className="col-span-2 row-start-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.sciunt culpa iiae au voluptas nd;ddddoiddodododo</p>

            </section>
            <Image
                src="/s1.png"
                alt="minesup_stamp"
                width={300}
                height={300}
                style={{ objectFit: 'contain', marginLeft: '50%' }}
            />
            <section className="space-y-1">
                <p className="leading-none">
                Only one copy of the transcript is issued. Its holder may reproduce and get certified as many copies as necessary.
                Furthermore, the document will have to be presented to the competent office before retrieving the certificate

            </p>
            <p className="leading-none">
                Une seule copie de ce relevé est délivrée. Son titulaire peut en reproduire et faire certifier autant de copies que nécessaire.
                De plus, ce document devra être présenté au service compétent avant le retrait du diplôme
            </p>
            </section>
        </footer>
    );
}

export default Footer;