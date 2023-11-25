import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
          src="/about.jpg"
          fill
          alt="about image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About Us
        </h1>
      </div>

      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Consequuntur odio excepturi
          dignissimos unde esse incidunt! Suscipit, unde
          voluptatem delectus soluta vero sequi quidem ipsum
          aliquam magni eos id temporibus iusto! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Enim
          voluptatem dicta Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequuntur odio
          excepturi dignissimos unde esse incidunt!
          Suscipit, unde voluptatem delectus soluta vero
          sequi quidem ipsum aliquam magni eos id temporibus
          iusto! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Enim voluptatem dicta nemo modi,
          minus animi sunt rem iure sequi voluptas eaque
          corporis laudantium ipsa ad, aliquam incidunt
          commodi odit! Error! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente, ipsa, sint
          est quasi et eos qui laborum laudantium quibusdam
          eaque magni cum illum, at fugit non officia
          commodi minus maiores?
        </p>

        <div className="w-full items-center flex justify-center">
          <Image
            src="/assets/signature.png"
            width={500}
            height={500}
            alt="singnature"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
