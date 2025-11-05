import Image from "next/image";
import LetterHead from "../ui/LetterHead";
import Footer from "../ui/Footer";



export default function Transcript() {
  return (
    <section className="bg-gray-50 print:shadow-none shadow-[0_5px_40px_-20px_rgb(0,0,0/0.25),0_25px_40px_-20px_rgb(0,0,0/0.25)] 
        shadow-gray-600 rounded-none  sm:w-[794px] m-auto sm:h-[1123px]
         box-border ">
          <LetterHead />
      <main className="px-5 space-y-4 mt-2">
        <section className="flex flex-row justify-around">
          <div className="flex flex-col text-sm mr-auto ">
            { /** User information section */}
            <dl className="flex flex-col">
              <dt className="flex gap-2 font-semibold">
                <p className="flex flex-col">
                  M/Mrs/Miss:
                  <small className=" italic font-normal -mt-1">M/Mme/Miss:</small>
                </p>
                <span className="">Kinge Plan Molonge</span>
              </dt>

              <dt className="flex gap-7 font-semibold">
                <p className="flex flex-col">
                  Born on:
                  <small className=" italic font-normal -mt-1">Ne(e) le:</small>
                </p>
                <small className="text-xs">13/02/2001</small>
                <span className="">at: Tiko-Fako</span>
              </dt>

              <dt className="flex gap-4 font-semibold">
                <p className="flex flex-col">
                  Registeration Number:
                  <small className=" italic font-normal -mt-1">N<sup>o</sup> Matricule:</small>
                </p>
                <small className="text-xs">20AC0096</small>
              </dt>
            </dl>
            <p className="flex flex-col">Has qualififed for the
              <small className=" italic font-normal -mt-1">A subi avec success les epreuves de l'examen du::</small>
            </p>
          </div>
          <div className="m-auto flex flex-col items-center justify-evenly">
            {/** QRcode section */}
            <Image
              src="/barcode.png"
              alt="barcode reader"
              width={70}
              height={80}
              style={{ objectFit: 'contain' }}
            />
            <div className="text-red-500">
              <small className="text-xs">Yaounde,the </small>
              <span className="text-sm skew-x-12">30 oct 2020</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <h1 className="uppercase text-center text-xl  text-red-500 font-bold">Higher National Diploma (HND)</h1>

          <div className="flex gap-x-25">
            <div className="flex flex-col text-sm mr-auto ">
              { /** User information section */}
              <dl className="flex flex-col">
                <dt className="flex gap-2 font-semibold">
                  <p className="flex flex-col">
                    Session de:
                    <small className=" italic font-normal -mt-1">Session:</small>
                  </p>
                  <span className="">June-July 2020</span>
                </dt>

                <dt className="flex gap-7 font-semibold">
                  <p className="flex flex-col">
                    Domain:
                    <small className=" italic font-normal -mt-1">Domain:</small>
                  </p>
                  <span className="text-wrap uppercase">Management,Business Studies and Legal Careers</span>
                </dt>

                <dt className="flex gap-7 font-semibold">
                  <p className="flex flex-col">
                    Sector:
                    <small className=" italic font-normal -mt-1">Specialite:</small>
                  </p>
                  <span className="uppercase">Accountancy</span>
                </dt>
              </dl>

            </div>
            <dl className="flex flex-col basis-sm ">
              <dt className="flex gap-4 font-semibold">
                <p className="flex flex-col">
                  Center:
                  <small className=" italic font-normal -mt-1">Centre:</small>
                </p>
                <span className="uppercase">Douala</span>
              </dt>

              <dt className="flex gap-4 font-semibold">
                <p className="flex flex-col">
                  Field:
                  <small className=" italic font-normal -mt-1">Filiere:</small>
                </p>
                <span className="uppercase ">Business and Finance</span>
              </dt>


            </dl>
          </div>

        </section>
        <table className="w-full border-collapse table-auto border border-gray-300">
          <thead className="border bg-[#615454]">
            <tr className="">
              <th className="border-r">Codes</th>
              <th className="border-r">paper types/subjects</th>
              <th className="border-r">credits</th>
              <th className="border-r">Natures</th>
              <th>Mark/20</th>

            </tr>
          </thead>
          <tbody className="text-center">

            <tr>
              <td
                className="text-center py-[0.7px] font-semibold"
                colSpan={5}
              >
                Fundamental Papers
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300 w-2/3">Intro to Programming</td>
              <td className="border border-gray-300 text-right">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300">Intro to Programming</td>
              <td className="border border-gray-300 text-right">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300">Intro to Programming</td>
              <td className="border border-gray-300 text-right">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
            <tr>
              <td
                className="text-center border-t-2 py-[0.7px] m-0 font-semibold"
                colSpan={5}
              >
                Professional Papers
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300">Intro to Programming</td>
              <td className="border border-gray-300 text-right">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300">Intro to Programming</td>
              <td className="border border-gray-300 text-right">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
            <tr>
              <td className="border border-gray-300">CS102</td>
              <td className="border border-gray-300">Intro to Programming</td>
              <td className="border border-gray-300 text-right ">6</td>
              <td className="border border-gray-300">Written</td>
              <td className="border border-gray-300">10,00</td>

            </tr>
          </tbody>
          <tfoot>
            <tr className="border">
              <td colSpan={5} className="  border">
                <div className="grid grid-cols-6 gap-0">
                  <div className="text-left border col-span-2">Grade: Lower credit</div>
                  <div className="text-center border flex flex-row justify-around col-span-3">
                    <span>Credit Earned: <span className="text-red-400">60</span></span>
                    <span>**Grade: <span className="text-red-400">B</span></span>
                  </div>
                  <div className=" text-center border col-span-1">**GPA: <span className="text-red-400">2,73</span></div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <Footer />
      </main>
    </section>
  );
}