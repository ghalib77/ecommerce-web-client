export default function ProdukList(props) {
  const { data = [], title = "" } = props;
  return (
    <div className="container flex flex-col min-h-full mx-auto my-8 space-y-5 transition-all duration-300 lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-3 max-w-7xl bg-base-100 hover:scale-110">
      <p className="text-3xl font-medium text-white">Rekomendasi</p>
      <div className="divider"></div>
      <div className="grid w-full grid-cols-4 gap-8 max-h-fit">
        {data.map(({ nama, harga, category, deskripsi }, index) => (
          <div
            className="shadow-xl w-full h-fit max-h-[342px] card"
            key={index}
          >
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="px-4 card-body bg-base-200">
              <div className="flex flex-col">
                <h2 className="text-white card-title">{nama}</h2>
                <span className="text-xs text-stone-400">{category}</span>
              </div>
              <p className="flex-grow-0 text-stone-400/80 h-fit line-clamp-2">
                {deskripsi}
              </p>
              <div className="items-center justify-between mt-2 card-actions">
                <button className="text-indigo-500 text-md">{price}</button>
                <button className="text-white text-md hover:text-indigo-500">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto px-14 btn btn-primary btn-md">Show more</div>
    </div>
  );
}
