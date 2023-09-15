export default function ImgContainer({ Imgsrc }: { Imgsrc: string }) {
  return (
    <div className="w-screen  h-[400px] snap-center bg-gray-500 rounded-lg">
      <img
        src={Imgsrc}
        alt="loading img"
        loading="lazy"
        className="rounded-xl object-cover w-[100%] h-[100%] aspect-[3/2] "
      />
    </div>
  );
}
