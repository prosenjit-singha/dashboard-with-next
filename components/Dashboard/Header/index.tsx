import { BiSearch, BiUserCircle } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { MdNotificationsNone as NotificationIcon } from "react-icons/md";

export default function DashboardHeader() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <header className="flex items-center px-6 py-4 border-b-2 w-full">
      {/* Title */}
      <h1 className="text-2xl text-gray-900 font-semibold">Dashboard</h1>

      {/* right part of the header */}
      <div className="ml-auto flex items-center gap-4">
        {/* Search field */}
        <form
          onSubmit={handleSubmit}
          className="min-w-[260px] rounded-md border flex"
        >
          <input
            name="search"
            placeholder="Search"
            className="text-[16px] pl-4 pr-2 py-2 focus-visible:outline-none"
          />
          <button
            type="submit"
            className="flex justify-center items-center text-[24px] p-2 text-slate-700"
          >
            <BiSearch />
          </button>
        </form>

        {/* Notification Icon */}
        <button className="text-[29px] relative">
          <NotificationIcon />
          <span className="absolute top-[1px] right-[1px] w-[8px] h-[8px] rounded-xl bg-red-500" />
        </button>
        <button className="text-[33px] relative">
          <BiUserCircle />
          <span className="absolute top-[1px] right-[1px] w-[10px] h-[10px] rounded-xl bg-green-600 border-2 border-white" />
        </button>
      </div>
    </header>
  );
}
