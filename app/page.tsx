// #1f2a37 rgb(66, 91, 118)
import TopBar from '@/components/TopBar';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#2d3e50]">
      <TopBar />
      <Sidebar/>
      <MainContent />
    </div>
  );
}
