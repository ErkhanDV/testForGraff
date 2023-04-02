import "./Modal.scss";

const Modal = ({
  active,
  children,
}: {
  active: boolean;
  children: JSX.Element;
}) => {
  return (
    <div className={`modal ${active ? "active" : ""}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
