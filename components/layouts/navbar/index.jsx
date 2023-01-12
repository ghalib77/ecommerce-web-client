import { ShoppingCart, Search, Filter } from "react-feather";

const Navbar = () => {
  return (
    <div className="sticky flex flex-col px-16 py-4 navbar bg-base-300">
      <div className="flex flex-row items-center justify-between w-full">
        <a className="p-0 text-xl normal-case btn btn-ghost">Tokopay</a>
        <div className="flex flex-row items-center justify-center gap-0">
          <div>
            <button className="px-8 py-2 border-2 rounded-tl-md rounded-bl-md btn-primary">
              Login
            </button>
            <button className="px-8 py-2 text-white border-2 border-l-0 border-primary rounded-tr-md rounded-br-md rounded-0 hover:bg-primary/20">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="w-full">
        <div className="flex flex-row gap-x-2">
          <div className="form-control">
            <div className="input-group input-group-sm">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered file-input-sm focus:outline-0 focus:ring-primary focus:ring-1"
              />
              <button className="btn btn-square btn-sm btn-primary">
                <Search width={12} height={12} />
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-right dropdown-bottom">
            <label
              tabIndex={0}
              className="flex items-center justify-center p-2 rounded-lg cursor-pointer w-fit h-fit bg-primary"
            >
              <Filter width={16} height={16} className="text-white" />
            </label>
            <div
              tabIndex={0}
              className="w-full max-w-sm p-2 border-2 rounded-lg shadow min-w-fit dropdown-content menu bg-base-300 border-primary "
            >
              <div className="form-control">
                <label className="label">category</label>
                <select className="w-52 select select-sm ">
                  <option disabled selected hidden>
                    Pick your favorite Simpson
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
