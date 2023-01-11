const Filter = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <span className="border-full rounded-md bg-blue-700 p-1 text-white">
        100
      </span>
      <input
        autoComplete="off"
        type="search"
        className="mr-2 w-[20rem] rounded-lg border border-slate-200 bg-gray-100 p-2"
        placeholder="Filter podcasts..."
      />
    </div>
  );
};

export default Filter;
