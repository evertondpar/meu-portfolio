import Image from "next/image";

export default function ContactItem({
  icon,
  link,
}: {
  icon: string;
  link: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white px-2 py-2 rounded-md">
        <Image src={`/${icon}.png`} alt={icon} width={25} height={25} />
      </div>
      {link}
    </div>
  );
}
