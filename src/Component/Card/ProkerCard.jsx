import React from "react";
import Logo from "../../Assets/General/logo.svg";
import { mdiComment } from "@mdi/js";
import Icon from "@mdi/react";

const ProkerCard = () => {
  return (
    <div className="my-7">
      <div className=" w-auto mx-10 border-black border-2 rounded-t-xl pt-12 px-36 ">
        <div className="flex flex-row my-6">
          <img
            src={Logo}
            className="w-20 h-20 rounded-full bg-cover bg-red-700"
          />
          <div className="text-3xl text-center bg-white items-center py-4 ml-5">
            Ini untuk Nama Orang
          </div>
        </div>
        <img
          src={Logo}
          className="w-auto border-2 border-black rounded-lg h-96 bg-cover"
        />
        <div className="my-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </div>
      </div>
      <div className="border-b-black  border-x-black border-2 rounded-b-xl  w-auto mx-10 grid grid-cols-3">
        <div className="items-center">
          <Icon className="text-black " path={mdiComment} size={2} />{" "}
        </div>
        <div>
          <Icon className="text-black " path={mdiComment} size={2} />{" "}
        </div>
        <div>
          <Icon className="text-black " path={mdiComment} size={2} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProkerCard;
