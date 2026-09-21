import Image from "next/image";

export default function ContactItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="bg-white px-2 py-2 rounded-md">
        <Image src={`/${icon}.png`} alt={icon} width={30} height={30} />
      </div>
      <span className="text-[18px] lg:text-[26px] font-light text-white">
        {text}
      </span>
    </div>
  );
}
