import Navbar from "@/components/Navbar";
import Additional from "@/components/Additional";
import Aside from "@/components/Aside";
import UseFetch from "@/constants/useFetch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" bg-white ">
                 <div className="mx-[160px] ">
                         <Navbar />
                    </div>
                 </div>
                   
                    <div className="bg-gray-100 w-full">
                         <div className="mx-[160px] ">
                              <Additional />
                         </div>
                         <div className="mx-[160px] flex  ">
                              <Aside />
                              <div className="ml-4">
                                   <UseFetch />
                                  
                              </div>
                         </div>
                    </div>
    </main>
  );
}
