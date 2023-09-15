export default function Footer() {
  const date = new Date();
  return (
    <div className="w-full bg-orange-600 text-white h-[200px]">
      <p className="text-center ">{date.getFullYear()}</p>
    </div>
  );
}
