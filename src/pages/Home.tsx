import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full bg-primary h-[100px]"></div>
      <div className="flex align-middle justify-center mt-10">
        <div className="avatar">
          <div className="hero bg-base-200 w-[900px] h-[600px] pt-[100px] mt-10">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="pl-5">
                <p className="text-3xl">Hello I'm</p>
                <p className="text-3xl text-blue-400">Iantso Christian</p>
                <p className="text-2xl mt-4 text-primary">
                  Junior FullStack developper
                </p>
                <div className="mt-10 ml-[50px]">
                  <div
                    className="btn btn-primary mr-10"
                    onClick={() => {
                      navigate("/portfolio/about");
                    }}
                  >
                    More about me
                  </div>
                  <div className="btn btn-outline">Get my cv</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="ml-[300px] text-3xl mt-[200px]">My projects</p>
        </div>
        <div className="mx-auto mb-40 hero bg-base-200 w-[1600px] h-[800px] pt-[100px] mt-10"></div>
      </div>

      <div className="w-full bg-base-200 h-[600px]"></div>
    </div>
  );
}
