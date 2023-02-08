import { BiSearch } from "react-icons/bi";

export default function DashboardHeader() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <header className="flex items-center px-6 py-4 border-b-2 w-full">
      {/* Title */}
      <h1 className="text-2xl text-gray-900 font-semibold">Dashboard</h1>

      {/* right part of the header */}
      <div className="ml-auto">
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
      </div>
    </header>
  );
}
