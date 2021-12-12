export function PopUp({ text, handleClose, handleClickOutside }) {
  return (
    <div className="PopUp" onClick={handleClickOutside}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose}>close</button>
        <p>{text}</p>
      </div>
    </div>
  );
}
