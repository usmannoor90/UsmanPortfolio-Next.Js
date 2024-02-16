import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import Modal from "react-responsive-modal";

function ProjectsModel() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  return (
    <>
      <button onClick={onOpenModal} className="rounded-md flex gap-1 group    ">
        <span className="font-bold capitalize">See Projects Archeive</span>
        <MdOutlineArrowOutward className="group-hover:rotate-45 translate-y-1 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
      </button>
      <Modal
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
          modal: " !max-w-[1200px] !w-full !m-auto  ",
        }}
        animationDuration={800}
        open={open}
        onOverlayClick={null}
        onClose={() => null}
        center
        showCloseIcon={false}
      >
        <div className=" py-6 px-4   ">
          <button
            className=" flex gap-2 items-center  group mb-4  font-semibold leading-tight text-[18px]  "
            onClick={() => {
              setOpen(false);
            }}
          >
            <FaArrowLeftLong /> M Usman Noor
          </button>
          <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>

          <table className=" mt-12 w-full text-left ">
            <thead className="    border-b border-slate-300/10 px-6 py-5   ">
              <tr className=" [&>td]:text-white    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <th className="table-cell"> Year </th>
                <th className="table-cell"> Projects </th>
                {/* <th className="hidden  lg:table-cell">Made at</th> */}
                <th className="hidden  lg:table-cell"> Built with </th>
                <th className="hidden  sm:table-cell"> Link </th>
              </tr>
            </thead>
            <tbody className=" px-6 py-5">
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2023 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={"https://housekey.coinbitsolutions.com/"}
                    target="_blank"
                  >
                    House-Key German Base Realtor Business
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      bootstrap
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Jquery
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      .net framework
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group  ">
                  <Link
                    href={"https://housekey.coinbitsolutions.com/"}
                    target="_blank"
                  >
                    housekey.coinbitsolutions.com{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2023 </td>
                <td className="table-cell !text-white   ">
                  <Link href={"https://php.beweb3.com/"} target="_blank">
                    PHP
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      bootstrap
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Jquery
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      .net framework
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link href={"https://php.beweb3.com/"} target="_blank">
                    php.beweb3.com/{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2022 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={"https://usmannoor90.github.io/deliciouse/"}
                    target="_blank"
                  >
                    Deliciouse
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      bootstrap
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      react
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      spoonacular api
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link
                    href={"https://usmannoor90.github.io/deliciouse/"}
                    target="_blank"
                  >
                    usmannoor90.github.io/{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2022 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={"https://trakify.coinbitsolutions.com/"}
                    target="_blank"
                  >
                    Trakify
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      bootstrap
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Jquery
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      .net framework
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link
                    href={"https://trakify.coinbitsolutions.com/"}
                    target="_blank"
                  >
                    trakify.coinbitsolutions.com{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2023 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={
                      "https://github.com/usmannoor90/React-Node-MySql-FullStack"
                    }
                    target="_blank"
                  >
                    Office Managment App
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      tailwind
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      ReactJs
                    </span>

                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      Node.Js/Express.Js
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      mysql
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      restful api
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link
                    href={
                      "https://github.com/usmannoor90/React-Node-MySql-FullStack"
                    }
                    target="_blank"
                  >
                    github/usmannoor90/React-Node-MySql-FullStack{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2024 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={"https://github.com/usmannoor90/Mern-Chat"}
                    target="_blank"
                  >
                    Node-Chat App
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      tailwind
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      ReactJs
                    </span>

                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      Node.Js/Express.Js
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      MongoDB
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      restful api
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link
                    href={"https://github.com/usmannoor90/Mern-Chat"}
                    target="_blank"
                  >
                    github/usmannoor90/Mern-Chat{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2023 </td>
                <td className="table-cell !text-white   ">
                  <Link
                    href={"https://github.com/usmannoor90/moviewebstack"}
                    target="_blank"
                  >
                    Movies Searching Plateform
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      typeScript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      ReactJs
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      Node.Js/Express.Js
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      MongoDB
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
                      restful api
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link
                    href={"https://github.com/usmannoor90/moviewebstack"}
                    target="_blank"
                  >
                    github/usmannoor90/moviewebstack{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
              <tr className=" [&>td]:text-[#ffffff9c]  border-b border-slate-300/10    [&>td]:py-4 [&>td]:pr-8 [&>td]:text-sm [&>td]:font-semibold ">
                <td className="table-cell"> 2022 </td>
                <td className="table-cell !text-white   ">
                  <Link href={"https://cbs.beweb3.com/"} target="_blank">
                    CBS Compnay site by Me
                    <MdOutlineArrowOutward className=" inline sm:hidden  " />
                  </Link>
                </td>
                {/* <td className="hidden  lg:table-cell">CoinBitSolutions </td> */}
                <td className="hidden  lg:table-cell">
                  <div className="  flex flex-wrap gap-1 items-center ">
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      html
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      css
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      bootstrap
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      Javascript
                    </span>
                    <span className="text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
                      ReactJs
                    </span>
                  </div>
                </td>
                <td className="hidden  sm:table-cell  group    ">
                  <Link href={"https://cbs.beweb3.com/"} target="_blank">
                    cbs.beweb3.com/{" "}
                    <MdOutlineArrowOutward className=" inline group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear   " />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}

export default ProjectsModel;
