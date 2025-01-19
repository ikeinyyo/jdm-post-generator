"use client";
import React, { useRef } from "react";
import { FaUsers, FaRegClock } from "react-icons/fa";
import Image from "next/image";
import StarRating from "./starRating/StarRating";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { toPng } from "html-to-image";
import { FaPlus, FaMinus, FaRedo, FaDownload } from "react-icons/fa";

interface Props {
  gameName: string;
  numPlayers: string;
  gameTime: string;
  postText: string;
  rating: number;
  image: string | null;
  isInvert: boolean;
  isSaturate: boolean;
  isContrast: boolean;
  isBrightness: boolean;
  isHideLayout: boolean;
}

const PostPreview = ({
  gameName,
  numPlayers,
  gameTime,
  postText,
  rating,
  image,
  isInvert,
  isSaturate,
  isContrast,
  isBrightness,
  isHideLayout,
}: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleCreateImage = () => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, {
      backgroundColor: "transparent",
      includeQueryParams: true,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${gameName || "image"}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  };

  return (
    <div className="w-full md:w-1/2 p-4 bg-gray-100 shadow-md flex flex-col items-center">
      <div
        className="relative bg-jdm"
        style={{ width: "600px", height: "600px" }}
        ref={cardRef}
      >
        {image ? (
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={3}
            wheel={{
              step: 0.1,
            }}
            disablePadding={false} // Usando panDisabled si es que existe
            limitToBounds={false} // Propiedad de bloqueo del eje X
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div>
                  <TransformComponent>
                    <div style={{ width: "600px", height: "600px" }}>
                      <Image
                        src={image}
                        alt="Post"
                        width={600}
                        height={600}
                        className={`${isBrightness ? " brightness-110 " : ""} ${
                          isContrast ? " contrast-125 " : ""
                        }
                        ${isSaturate ? " saturate-150 " : ""}`}
                      />
                    </div>
                  </TransformComponent>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={() => zoomIn()}
                    className="bg-jdm text-white p-2 rounded-md"
                  >
                    <FaPlus size={20} />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="bg-jdm text-white p-2 rounded-md"
                  >
                    <FaMinus size={20} />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="bg-jdm text-white p-2 rounded-md"
                  >
                    <FaRedo size={20} />
                  </button>
                  <button
                    onClick={handleCreateImage}
                    className="bg-black text-white p-2 rounded-md"
                  >
                    <FaDownload size={20} />
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white">
            Sube una imagen para previsualizar
          </div>
        )}
        {!isHideLayout && gameName && (
          <div
            className={`${
              isInvert ? " left-0 " : " right-0 "
            }absolute top-10 bg-jdm text-white text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 shadow-md`}
          >
            {gameName}
          </div>
        )}

        {(numPlayers || gameTime) && !isHideLayout && (
          <div
            className={`${
              isInvert ? " left-0 " : " right-0 "
            } absolute top-24 bg-white text-gray-800 text-l font-medium px-4 py-2 shadow-md shadow-black  flex items-center gap-2 z-10`}
          >
            {numPlayers && (
              <>
                <FaUsers className="text-jdm" />
                {numPlayers}
              </>
            )}
            {gameTime && (
              <>
                <FaRegClock className="text-jdm" />
                {gameTime}
              </>
            )}
          </div>
        )}

        {!isHideLayout && rating && (
          <div
            className={`${
              isInvert ? " right-0 " : " left-0 "
            } absolute bottom-10 bg-jdm text-white px-4 py-2 shadow-md shadow-black z-10`}
          >
            <StarRating rating={rating} />
          </div>
        )}
      </div>

      <div className="mt-16 p-4 bg-white rounded-md shadow-md w-full h-80">
        <p className="text-gray-700">
          {postText || "Escribe tu texto aquí..."}
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
