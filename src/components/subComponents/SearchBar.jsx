import { FaSearch } from "react-icons/fa"
import SortBtn from "../SortBtn"

export const SearchBar = ({ itemValue, itemFunction, item }) => {
     return (
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder={`search ${item}`} className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} value={itemValue} onChange={itemFunction} />
                    <FaSearch />
               </div>
               {/* <SortBtn /> */}
          </div>
     )
}