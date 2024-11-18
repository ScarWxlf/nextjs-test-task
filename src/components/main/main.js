import Image from "next/image";

export default function Main() {
  return (
    <section className="flex-grow  md:flex md:justify-between relative">
      <div className="md:w-1/2 relative flex flex-col justify-between h-2/3 mt-16">
        <div>
          <h1 className="text-2xl">here will be social media</h1>
        </div>
        <div className="text-4xl">
          <p className="mb-2">Construction Estimating Services </p>
          in {" "}
          <span className="text-red-600">USA</span> &{" "}
          <span className="text-red-600">CANADA</span>
        </div>
        <p className="text-black text-xl">
          We help busy contractors with accurate estimates and win more projects
        </p>
        <div className="space-x-4 text-bold text-lg">
          <button className="bg-white text-black border-2 border-secondary h-14 w-36 rounded-2xl">
            More Details
          </button>
          <button className="bg-secondary text-white h-14 w-52 rounded-2xl">
            Book An Appointment
          </button>
        </div>
        <p>
          <span className="text-lg text-gray-500">Let&apos;s Talk </span>
          <br />
          <span className="font-bold text-3xl">(+92)3064699803</span>
        </p>
      </div>

      <div className="mt-10 relative flex items-center h-full justify-center md:mt-0 font-bold">
        <div className="flex flex-col absolute text-3xl z-[-1] select-none">
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">&nbsp; * * * * * * * * * * * * *</div>
          <div className="tracking-[7px]">* * * * * * * * * * * * *</div>
        </div>
        <Image
          src="/images/image.png"
          alt="Worker"
          className="rounded-lg mx-auto md:mx-0 h-full"
          width={500}
          height={500}
        />
      </div>

      <section className="flex justify-center gap-10 px-6 py-6 text-center absolute left-0 bottom-0 w-full z-[-1]">
        <div className="w-20">
          <h3 className="text-main text-4xl font-bold">95%</h3>
          <p className="text-lg">Customer Satisfaction</p>
        </div>
        <div className="w-20">
          <h3 className="text-main text-4xl font-bold">36+</h3>
          <p className="text-lg">Industry Award</p>
        </div>
        <div className="w-20">
          <h3 className="text-main text-4xl font-bold">370+</h3>
          <p className="text-lg">Successful Projects</p>
        </div>
      </section>
    </section>
  );
}
