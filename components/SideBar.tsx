import type { NextPage } from "next";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";

const SidebBar: NextPage = () => {
  return (
    <>
      <div className="p-5 space-y-6 mt-3">
        <div className="flex ml-5 text-[#dfedd9] hover:text-white">
          {" "}
          <button>
            <HomeIcon className="h-5 w-5 mr-2 " />
          </button>
          <p className="font-bold">Home</p>
        </div>
        <div className="flex ml-5 text-[#dfedd9] hover:text-white">
          {" "}
          <button>
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          </button>
          <p className="font-bold">Search</p>
        </div>
        <div className="flex ml-5 text-[#dfedd9] hover:text-white">
          {" "}
          <button>
            <TableCellsIcon className="h-5 w-5 mr-2" />
          </button>
          <p className="font-bold">Your Library</p>
        </div>
      </div>
    </>
  );
};

export default SidebBar;
