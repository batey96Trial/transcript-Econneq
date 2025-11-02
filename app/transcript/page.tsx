import Image from "next/image";

export default function Transcript() {
    return (
        <main className="p-5 space-y-8">
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
                            <span className="">13/02/2001</span>
                            <span className="">at: Tiko-Fako</span>
                        </dt>

                        <dt className="flex gap-4 font-semibold">
                            <p className="flex flex-col">
                                Registeration Number:
                                <small className=" italic font-normal -mt-1">N<sup>o</sup> Matricule:</small>
                            </p>
                            <span className="">20AC0096</span>
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
                        alt="minesup_logo"
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
                <h1 className="uppercase text text-center text-shadow-md font-open-sans text-red-500 font-bold">Higher National Diploma (HND)</h1>

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
                <table className="w-full border-collapse table-auto border border-gray-300 ...">
 <thead className="border bg-[#dddddd]">
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
      <td className="border border-gray-300 ...">Indiana</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
            <td className="border border-gray-300 ...">Indianapolis</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
      <td className="border border-gray-300 ...">Indianapolis</td>

    </tr>
    <tr>
      <td className="border border-gray-300 ...">Ohio</td>
      <td className="border border-gray-300 ...">Columbus</td>
            <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
            <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Detroit</td>
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
      <td className="border border-gray-300 ...">Indiana</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
            <td className="border border-gray-300 ...">Indianapolis</td>
      <td className="border border-gray-300 ...">Indianapolis</td>
      <td className="border border-gray-300 ...">Indianapolis</td>

    </tr>
    <tr>
      <td className="border border-gray-300 ...">Ohio</td>
      <td className="border border-gray-300 ...">Columbus</td>
            <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

    </tr>
    <tr>
      <td className="border border-gray-300 ...">Michigan</td>
            <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Indianapolis</td>

      <td className="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
  <tfoot>
    <tr className="border">
      <td colSpan={5} className="  border">
        <div className="grid grid-cols-6 gap-0">
          <div className="text-left border col-span-2">Grade: Lower credit</div>
          <div className="text-center border flex flex-row justify-around col-span-3">
            <span>Credit Earned: 60</span>
            <span>**Grade: B</span>
          </div>
          <div className=" text-center border col-span-1">**GPA: 2,73</div>
        </div>
      </td>
    </tr>
  </tfoot>
</table>

        </main>
    );
}