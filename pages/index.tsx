import Button from "@/components/commons/Button"; // Change "commons" to "common"
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#171D22] text-white">
      {/* ... rest of the component ... */}
    </div>
  );
};

export default Home;