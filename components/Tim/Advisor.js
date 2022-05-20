
export default function Advisor() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-slate-400 uppercase font-bold text-xs">
                Advisory Board
              </h5>
              <span className="font-semibold text-xl text-slate-700">
                Pembina & Penasihat
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial relative xs:relative sm:relative">
              <div
                className=
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
              >
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="text-md text-black mt-4">
           <p className="font-semibold text-red-500">Blockchain & Sharia Advisor</p>
             <span className="text-black mr-2">
              Ir. Noor Akhmad Setiawan, Ph.D., IPM.
             </span>
              <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://www.linkedin.com/in/nasetiawan/" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebookk.com/in/nasetiawan/" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/in/noorsetiawan/" target="_blank"
                   className="hover:text-red-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
          </div>

          <div className="text-md text-black mt-4">
           <p className="font-semibold text-red-500">Blockchain & Sharia Advisor</p>
            <span className="text-black mr-2">
              Achmad Bahauddin, S.T., M.T.
            </span>
            <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://www.linkedin.com/in/achmadbahauddin/" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/achmad.bahauddin" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
            </div>
          </div>

          <div className="text-md text-black mt-4">
           <p className="font-semibold text-red-500">Blockchain & Sharia Advisor</p>
            <span className="text-black mr-2">
              Andy Bangkit Setiawan, Ph.D.
            </span>
            <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://www.linkedin.com/in/andy-bangkit-a94a7676/" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/andy.bangkit" target="_blank"
                   className="hover:text-blue-500 text-slate-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
            </div>
          </div>
          <div className="text-md text-black mt-4">
           <p className="font-semibold text-red-500">Sharia Advisor</p>
            <span className="text-black mr-2">
              Fida' Munadzir, B.A.
            </span>
          </div>
          <div className="text-md text-black mt-4">
           <p className="font-semibold text-red-500">Tokenomics & Sharia Advisor</p>
            <span className="text-black mr-2">
              Ade Setiawan
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
