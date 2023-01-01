export default function Menu() {
  return (
    <div className="bg-gray-100 w-full h-full ">
      <div className="rounded border border-gray-200 w-36 bg-white hover:scale-[103%] cursor-pointer transition-transform select-none">
        <div className="w-full h-48 bg-blue-500"></div>
        <div className="w-fit p-2">
          <span className="font-semibold text-sm">Cerveja Antarctica</span>
          <span className="font-semibold text-sm inline-block">R$16,00</span>
        </div>
      </div>
    </div>
  );
}
