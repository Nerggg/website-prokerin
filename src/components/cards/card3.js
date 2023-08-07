import Vue from "../../assets/card/vue.png";
import Comment1 from "../comments/comment1";
import Comment2 from "../comments/comment2";
import Icon from "@mdi/react";
import { mdiCommentPlusOutline } from "@mdi/js";

function Card3() {
  return (
    <div className="flex w-[70%] h-auto bg-white ml-[16%] drop-shadow-md rounded-xl mt-[40px] p-[20px]">
      <div className="flex flex-col">
        <div className="flex">
          <img src={Vue} className="w-auto h-[80px]" />
          <div className="flex flex-col">
            <div className="px-[10px] pt-[10px] font-bold">
              Vue Organization
            </div>
            <div className="px-[10px]">
              Melakukan kunjungan/studi banding ke organisasi lain
            </div>
          </div>
        </div>
        <div className="pt-[10px]">
          Tujuan: Mendapatkan ilmu baru dan membandingkan metode pengerjaan.
        </div>
        <div className="pt-[10px]">
          Kegiatan: Berkunjung ke organisasi lain pada tanggal 20 setiap bulan.
        </div>
        <Comment1 />
        <Comment2 />
        <div className="flex">
          <Icon
            path={mdiCommentPlusOutline}
            className="mt-[10px] w-auto h-[25px]"
          />
          <div className="mt-[6px] ml-[2%] h-[35px] w-full bg-white rounded-lg border-black border">
            <input
              className="mx-[4px] mt-[4px] w-[95%] outline-none"
              placeholder="Add comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
