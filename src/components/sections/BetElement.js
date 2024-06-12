export default function BetElement({ data, direction, activeElement, prevActiveElement, toggleElement }) {
  let strValue = data.value.toString();
  if (data.value > 0) {
    strValue = `+${data.value}`;
  }

  return (
    <div
      className={`bet-option-${direction} bet-option ${activeElement === data.name && 'active'}`}
      onClick={() => toggleElement(data)}
    >
      <p>{data.name}</p>
      <p>{strValue}</p>
    </div>
  );
}
