export const Notes = () => {
  const handleChange = (e) => {
    localStorage.setItem("notes", e.target.value);
  };

  return (
    <div className="bg-[#f1c75b] rounded-2xl px-8 py-6 text-black space-y-4">
      <h6 className="text-2xl font-semibold">All Notes</h6>
      <textarea
        rows="8"
        className="bg-transparent outline-none resize-none w-full overflow-y-auto"
        defaultValue={localStorage.getItem("notes")}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
