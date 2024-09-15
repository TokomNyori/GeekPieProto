"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { createPortal } from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  trigger: string | React.ReactNode;
  title: string;
};

const Modal = ({ children, className, trigger, title }: ModalProps) => {
  const [modalState, setModalState] = useState<boolean>(false);
  const modalBgRef = useRef<any>(null);
  const modalRef = useRef<any>(null);
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useEffect(() => {
    if (modalState) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [modalState]);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleIsclosing();
      }
    };

    if (modalState) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalState]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      if (modalState && !isModalClosing) {
        tl.fromTo(
          ".general-modal",
          {
            scale: 0.5,
            opacity: 0.5,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
          },
        );
        tl.fromTo(
          ".general-modal-close-btn",
          { scale: 0 },
          { scale: 1, duration: 0.5 },
          "-=0.2",
        );
      } else if (isModalClosing) {
        tl.fromTo(
          ".general-modal-close-btn",
          { scale: 1 },
          { scale: 0, duration: 0.5 },
        );
        tl.fromTo(
          ".general-modal",
          { scale: 1, opacity: 1 },
          {
            scale: 0.3,
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              setModalState(false);
              setIsModalClosing(false);
            },
          },
          "-=0.3",
        );
      }
    },
    {
      scope: modalBgRef,
      dependencies: [modalState, isModalClosing],
    },
  );

  function handleIsclosing() {
    setIsModalClosing(true);
  }

  return (
    <>
      <button onClick={() => setModalState(!modalState)}>{trigger}</button>
      {modalState &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            ref={modalBgRef}
            className="modal-bg-z-index fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          >
            <div
              className={cn(
                "general-modal modal-z-index overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-950 bg-opacity-90 px-5 py-10",
                className,
              )}
              ref={modalRef}
            >
              <div className="relative mb-5 flex items-center justify-between gap-4">
                <h6 className="font-semibold uppercase leading-none">
                  {title}
                </h6>
                <div
                  className="general-modal-close-btn absolute -top-3 right-0 cursor-pointer"
                  onClick={handleIsclosing}
                >
                  <IoCloseCircleOutline className="text-4xl text-gray-100 transition-all duration-300 ease-in-out hover:text-red-400" />
                </div>
              </div>
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
