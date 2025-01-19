import { FaInstagram } from "react-icons/fa";
import { ToggleButton } from "./postForm/ToggleButton";
import Image from "next/image";

interface Props {
  gameName: string;
  setGameName: (value: string) => void;
  numPlayers: string;
  setNumPlayers: (value: string) => void;
  gameTime: string;
  setGameTime: (value: string) => void;
  postText: string;
  setPostText: (value: string) => void;
  rating: number;
  setRating: (value: number) => void;
  setImage: (value: string | null) => void;
  isInvert: boolean;
  setIsInvert: (value: boolean) => void;
  isBrightness: boolean;
  setIsBrightness: (value: boolean) => void;
  isContrast: boolean;
  setIsContrast: (value: boolean) => void;
  isSaturate: boolean;
  setIsSaturate: (value: boolean) => void;
  isHideLayout: boolean;
  setIsHideLayout: (value: boolean) => void;
}

const PostForm = ({
  gameName,
  setGameName,
  numPlayers,
  setNumPlayers,
  gameTime,
  setGameTime,
  postText,
  setPostText,
  rating,
  setRating,
  setImage,
  isInvert,
  setIsInvert,
  isSaturate,
  setIsSaturate,
  isContrast,
  setIsContrast,
  isBrightness,
  setIsBrightness,
  isHideLayout,
  setIsHideLayout,
}: Props) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl text-black flex items-center">
          <FaInstagram className="mr-2 text-jdm" />
          Post Generator
        </h1>
        <Image src="/jdm_logo.png" alt="Post" width={100} height={100} />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold text-gray-800 mb-2">
          Buscar juego
        </label>
        <input
          type="text"
          placeholder="Escribe para buscar un juego"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jdm text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold text-gray-800 mb-2">
          Texto del post
        </label>
        <textarea
          placeholder="Escribe el texto del post aquí..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jdm text-gray-800"
          rows={5}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Número de jugadores"
          value={numPlayers}
          onChange={(e) => setNumPlayers(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jdm text-gray-800"
        />
        <input
          type="text"
          placeholder="Tiempo de juego"
          value={gameTime}
          onChange={(e) => setGameTime(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jdm text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-800">
          Puntuación
        </label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.25"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full mt-2 focus:ring-jdm"
        />
      </div>
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        Layout
      </label>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Invertir
          </label>
          <ToggleButton onToggle={setIsInvert} isToggled={isInvert} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Ocultar layout
          </label>
          <ToggleButton onToggle={setIsHideLayout} isToggled={isHideLayout} />
        </div>
      </div>
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        Ajustes de la imagen
      </label>
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Saturación
          </label>
          <ToggleButton onToggle={setIsSaturate} isToggled={isSaturate} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Contraste
          </label>
          <ToggleButton onToggle={setIsContrast} isToggled={isContrast} />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-800">Brillo</label>
          <ToggleButton onToggle={setIsBrightness} isToggled={isBrightness} />
        </div>
      </div>
      <div>
        <label className="block text-lg font-semibold text-gray-800 mb-2">
          Subir imagen
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full text-gray-800"
        />
      </div>
    </div>
  );
};

export default PostForm;
