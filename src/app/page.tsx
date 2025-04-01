"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
	const [videoSrc, setVideoSrc] = useState("/assets/videos/spidey-intro.mp4");
	const [isMuted, setIsMuted] = useState(true);
	const [showButton, setShowButton] = useState(true);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [showImage, setShowImage] = useState(true);

	const handleVideoChange = () => {
		setVideoSrc("/assets/videos/rikuroru.mp4"); // Update the video source
		setIsMuted(false); // Unmute the video
		setShowButton(false); // Hide the button
		setShowImage(false);
		// Force video reload
		if (videoRef.current) {
			videoRef.current.load(); // Reloads the video element
			videoRef.current.play(); // Ensures it plays immediately
		}
	};

	return (
		<main className="relative flex flex-col overflow-hidden w-screen h-screen bg-no-repeat bg-cover bg-center items-center">
			<video
				ref={videoRef}
				autoPlay
				loop
				muted={isMuted}
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src={videoSrc} type="video/mp4" />
			</video>

			{showImage && (
				<Image
					src={"/assets/images/bifrost-arena-removed.png"}
					className="absolute top-20 left-1/2 -translate-x-1/2"
					alt="bifrost logo"
					width={200}
					height={100}
				/>
			)}

			{showButton && (
				<div className="flex items-center justify-center absolute left-1/2 bottom-20 -translate-x-1/2">
					<button
						onClick={handleVideoChange}
						className="hover:cursor-pointer relative px-8 py-3 bg-black text-white font-semibold text-[20px] rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
					>
						<span className="flex items-center space-x-2">
							<span>PLAY WITH US?</span>
						</span>
						<span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
					</button>
				</div>
			)}
		</main>
	);
}
