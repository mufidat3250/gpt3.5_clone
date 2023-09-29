import {
    MutableRefObject,
    ReactNode,
    useEffect,
    useRef,
  } from "react";
import CloseIcon from "../Vectors/CloseIcon";
  // import { useClickAway } from "react-use";
  import "./Modal.scss";
  
  type ModalProps = {
    openModal: boolean;
    children: ReactNode;
    maxWidth?: string | number;
    closeModal: Function;
    title?:string;
  };
  
  function Modal({openModal, children, closeModal, maxWidth = 890, title}: ModalProps) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
  
    useEffect(() => {
      const checkIfClickedOutside = (e: any) => {
        if (openModal && ref.current && !ref.current.contains(e.target)) {
          closeModal();
        }
      };
      document.body.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        document.body.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [openModal]);
  
    return (
      <div>
        {openModal && <div className="modal-overlay"></div>}
        <div
          style={{maxWidth: maxWidth}}
          ref={ref}
          className={openModal ? "open-modal modal-box" : "modal-box"}
        >
          <div className="flex items-center border-b-[1px] border-gray-400 pb-4 pl-8">
            {title && <p className="font-bold text-2xl">{title}</p>}
          <button className="close-btn" onClick={() => closeModal()}>
            <CloseIcon />
          </button>
          </div>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;
  