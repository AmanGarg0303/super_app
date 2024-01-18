export const Card = ({ card, setSelected, selected }) => {
  const onClick = () => {
    if (selected.includes(card.title)) {
      setSelected(selected.filter((item) => item !== card.title));
    } else {
      setSelected((prev) => [...prev, card.title]);
    }
  };

  return (
    <div
      className={`p-5 rounded-lg w-48 cursor-pointer ${
        selected.includes(card.title) && "border-4 border-green-500"
      }`}
      style={{ backgroundColor: card.bgColor }}
      onClick={onClick}
    >
      <div className="h-full flex flex-col gap-y-4 justify-between">
        <p className="font-medium text-2xl">{card.title}</p>
        <img
          src={card.img}
          alt={card.title}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};
