import Link from "next/link";

const PlateNav = () => {
    return (
        <header className="w-full">
            <nav className=" bg-plate-primary-warm-gold p-4">

                <ul className="flex gap-4 justify-end font-heading opacity-60">
                    <Link href=""> For Students </Link>
                    <Link href=""> For Restaurants </Link>
                    <Link href=""> About Us </Link>


                </ul>
            </nav>
        </header>

    );
}

export default PlateNav;