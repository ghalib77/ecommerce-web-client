import Image from "next/image";
export default function Verification() {
  return (
    <div className="min-h-screen hero bg-base-300">
      <div className="shadow-xl card w-full max-w-[24rem] bg-base-100 hero-content">
        <figure className="px-10 pt-10">
          <Image
            src="/rocket.svg"
            alt="Rocket"
            className="rounded-xl"
            width={50}
            height={50}
            layout="responsive"
          />
        </figure>
        <div className="items-center space-y-4 text-center card-body">
          <h2 className="font-bold text-indigo-500 card-title">
            Verify your email
          </h2>
          <p>We have sent you a verification link to your email</p>
          <div className="card-actions">
            <div className="btn btn-primary btn-md">Resend email</div>
          </div>
        </div>
      </div>
    </div>
  );
}
