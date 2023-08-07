import Elon from '../../assets/card/masElon.jpg'
import Icon from '@mdi/react';
import { mdiCommentPlusOutline } from '@mdi/js';

function Comment2() {
  return (
    <div className="flex w-full h-auto bg-white ml-[3%] drop-shadow-md rounded-xl my-[10px] p-[20px]">
      <div className="flex flex-col">
        <div className="flex">
          <img src={Elon} className="w-[40px] h-[40px] rounded-full object-cover" />
          <div className="flex flex-col">
            <div className="px-[10px] text-[14px] font-bold">Mas Elon</div>
        <div className="px-[10px] pt-[10px] text-[14px]">Proker yang sangat menakjubkan!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment2;
