import SideBar from '../../components/sidebar/sidebarHome'
import Card1 from '../../components/cards/card1'
import Card2 from '../../components/cards/card2'
import Card3 from '../../components/cards/card3'

function Main() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="w-screen pb-[30px]">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default Main;
