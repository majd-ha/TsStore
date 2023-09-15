export default function Footer() {
  const date = new Date();
  return (
    <div className="w-full bg-orange-600 text-white h-[200px] py-5">
      <p className="text-center my-5 capitalize">
        All Rights Reserverd {date.getFullYear()} &copy;
      </p>
    </div>
  );
}
