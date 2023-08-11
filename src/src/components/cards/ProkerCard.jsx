import React from "../../assets/card/react.png";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from "@mdi/js";
import { useNavigate } from "react-router";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MainDetail from "../../pages/mainPage/MainDetail";

const ProkerCard = ({ children, data, isDetail = false }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
    setCurrentId(null);
  }

  function openModal(id) {
    setIsOpen(true);
    setCurrentId(id);
  }
  return (
    <>
      <div className="min-h-[720px]">
        <div className="flex  h-full bg-white drop-shadow-md rounded-xl pt-8 ">
          <div className="px-10 flex flex-col space-y-5 min-w-full">
            <div
              className="flex cursor-pointer space-x-3"
              // onClick={() => navigate(`./${data.id}`)}
              onClick={() => openModal(data.id)}
            >
              <Icon
                path={mdiAccountCircleOutline}
                className=" w-auto h-[80px]"
              />
              <div className="flex flex-col ">
                <div className="text-2xl pt-[10px] font-bold">{data?.name}</div>
                <div className="line-clamp-1">{data?.short_description}</div>
              </div>
            </div>
            <div className=" h-96  flex justify-center">
              <img src={data?.image} alt="foto" className="object-cover " />
            </div>
            <div className="text-justify line-clamp-6">{data?.description}</div>

            {children}
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" h-[900px] w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="h-full overflow-auto">
                    <MainDetail id={currentId} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProkerCard;
