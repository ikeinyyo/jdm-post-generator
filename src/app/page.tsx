"use client";
import React, { useState } from "react";
import MainLayout from "@/features/mainLayout/MainLayout";
import PostForm from "@/features/postForm/PostForm";
import PostPreview from "@/features/postPreview/PostPreview";

const Home = () => {
  const [gameName, setGameName] = useState("Juernes de Mesa");
  const [numPlayers, setNumPlayers] = useState("1 - 5");
  const [gameTime, setGameTime] = useState("45' - 60'");
  const [postText, setPostText] = useState("");
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState<string | null>(null);
  const [isInvert, setIsInvert] = useState<boolean>(false);
  const [isHideLayout, setIsHideLayout] = useState<boolean>(false);
  const [isSaturate, setIsSaturate] = useState<boolean>(true);
  const [isContrast, setIsContrast] = useState<boolean>(false);
  const [isBrightness, setIsBrightness] = useState<boolean>(true);

  return (
    <MainLayout>
      <PostForm
        gameName={gameName}
        setGameName={setGameName}
        numPlayers={numPlayers}
        setNumPlayers={setNumPlayers}
        gameTime={gameTime}
        setGameTime={setGameTime}
        postText={postText}
        setPostText={setPostText}
        rating={rating}
        setRating={setRating}
        setImage={setImage}
        setIsInvert={setIsInvert}
        isInvert={isInvert}
        isSaturate={isSaturate}
        setIsSaturate={setIsSaturate}
        isContrast={isContrast}
        setIsContrast={setIsContrast}
        isBrightness={isBrightness}
        setIsBrightness={setIsBrightness}
        isHideLayout={isHideLayout}
        setIsHideLayout={setIsHideLayout}
      />
      <PostPreview
        gameName={gameName}
        numPlayers={numPlayers}
        gameTime={gameTime}
        postText={postText}
        rating={rating}
        image={image}
        isInvert={isInvert}
        isSaturate={isSaturate}
        isContrast={isContrast}
        isBrightness={isBrightness}
        isHideLayout={isHideLayout}
      />
    </MainLayout>
  );
};

export default Home;
