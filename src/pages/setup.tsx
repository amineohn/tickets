import React from "react";
import PageTransition from "../components/PageTransition";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Setup = () => {
  return (
    <Main
      meta={
        <Meta
          title="Amine"
          description="My Personal website made with NextJS & Tailwind."
        />
      }
    >
      <PageTransition>
        <div className="flex flex-col justify-center px-8 ">
          <div className="flex-col items-center">
            <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
              Setup
            </h1>
            <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white ">
              Information about my setup.
            </p>
            <div className="mt-8">
              <article className="max-w-none w-full prose prose-lg dark:prose-dark">
                <div>
                  <ul>
                    <li className="p-4">
                      <span className="font-medium">Case</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://infomaxparis.com/fr/boitier-pc-gamer/31637-corsair-icue-5000x-rgb-tempered-glass-white-0840006627531.html"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Corsair iCUE 5000X RGB Tempered Glass White
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Motherboard</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.fr/ASUS-Gaming-ROG-stages-802-11ax/dp/B07TQVK1HJ/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        ASUS ROG X570-E
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">PSU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/RMx-Series/p/CP-9020180-UK"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Corsair RMx Series™ RM850x
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">GPU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3080/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        NVIDIA Geforce RTX 3080 Founder Edition
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">CPU</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.fr/AMD-Ryzen-7-5800X-RyzenTM/dp/B0815XFSGK/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        AMD Ryzen 7 5800x
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">CPU Cooler</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.fr/Corsair-Watercooling-processeur-Lumineuses-Ventilateurs/dp/B08G1NSG7F/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Corsair iCUE H100i ELITE CAPELLIX
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Memory</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.amazon.fr/dp/B08B6FBFM9/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        PNY 2x16GB DDR4-3600
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Storage</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-1tb-mz-v7s1t0bw/"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        Samsung 970 EVO Plus NVMe M.2 SSD 1TB
                      </a>
                    </li>
                    <li className="p-4">
                      <span className="font-medium">Laptop</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="caret-right"
                        className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 224 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                        ></path>
                      </svg>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.dell.com/fr-fr/work/shop/ordinateurs-portables-professionnels/xps-13/spd/xps-13-9310-laptop/bn93209sb"
                        className="p-2 bg-opacity-50 bg-gray-100 dark:bg-gray-900 rounded-2xl"
                      >
                        DELL XPS 13
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </PageTransition>
    </Main>
  );
};
export default Setup;
