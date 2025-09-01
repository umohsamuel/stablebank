import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="bg-brand-black grid h-screen grid-cols-2 text-white">
      <div className="flex w-full items-center justify-center px-[5%]">
        <div className="flex w-full max-w-[480px] flex-col items-center justify-center gap-20">
          <div className="w-full">
            <Image
              src={"/images/brand/logo-full.svg"}
              alt="stable bank logo"
              width={300}
              height={35}
              className="h-9 w-auto"
            />
          </div>
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex w-fit items-center gap-2 rounded-3xl border border-solid border-white px-3 py-2.5 font-sans">
                <span className="aspect-square h-[9px] w-[9px] rounded-full bg-white" />
                <span className="text-sm font-normal">Decentralised</span>
              </div>
              <h1 className="text-7xl font-extrabold">
                Welcome To <br />
                <span className="text-brand-purple">Stablebank</span>
              </h1>
              <p className="text-[22px] font-normal">
                Secure, scalable, and decentralized solutions for your digital
                assets—experience the future of financial freedom.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/signup"
                className="bg-brand-purple rounded-[40px] px-8 py-[11px] text-[22px] font-semibold"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="border-brand-purple rounded-[40px] border-[1.5px] border-solid px-8 py-[11px] text-[22px] font-semibold"
              >
                Sign-In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={"/images/png/get-started-img.png"}
          alt="get started img"
          width={300}
          height={35}
          className="h-full w-full rounded-l-[20px] object-cover object-center"
        />
      </div>
    </div>
  );
}
