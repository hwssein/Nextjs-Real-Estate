import Image from "next/image";
import Link from "next/link";

function HomePageCard({ name, title }) {
  return (
    <>
      <Link href={`/residential-post?category=${name}`}>
        <div className="w-full p-1 rounded shadow">
          <div className="w-full rounded overflow-hidden sm:w-64 md:w-72 lg:w-60">
            <Image
              className="w-full rounded hover:scale-110 transition ease-in duration-150"
              src={`/image/homepage-${name}.jpg`}
              width={400}
              height={300}
              alt={title}
              priority={true}
            ></Image>
          </div>

          <h3 className="w-full text-darkPrimary text-center p-1 font-bold ">
            {title}
          </h3>
        </div>
      </Link>
    </>
  );
}

export default HomePageCard;
