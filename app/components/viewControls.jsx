const ViewControls = ({
  gridView,
  setGridView,
  categories,
  setCurrentCategory,
}) => {
  return (
    <div className="view-controls flex justify-between gap-x-2">
      <div className="ui buttons flex  text-white">
        <button
          className={`outline-none font-bold px-6 py-3 ${
            gridView ? 'text-orange-500 bg-white' : 'text-white bg-orange-500'
          } border border-orange-500 rounded-tl-md rounded-bl-md`}
          onClick={(e) => setGridView(false)}
        >
          Vocabulary List
        </button>
        <button
          className={`outline-none font-bold px-6 py-3 ${
            !gridView ? 'text-orange-500 bg-white' : 'text-white bg-orange-500'
          } border border-orange-500  rounded-tr-md rounded-br-md`}
          onClick={(e) => setGridView(true)}
        >
          Picture Dictionary
        </button>
      </div>
      <div>
        <select
          name="collection_id"
          id="collection_id"
          className="min-w-80 max-w-80 h-full pt-[10px] pr-[48px] pb-[11px] pl-[16px] text-lg border rounded-md border-zinc-400 outline-none"
          onChange={(e) => {
            setCurrentCategory(parseInt(e.target.value));
          }}
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="h-10 bg-zinc-100"></div>
    </div>
  );
};

export default ViewControls;
