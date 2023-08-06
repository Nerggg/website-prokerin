import SideBar from '../../components/sidebar/sidebar'
import Card1 from '../../components/cards/card1'

function Main() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="w-screen pb-[30px]">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
}

export default Main;
