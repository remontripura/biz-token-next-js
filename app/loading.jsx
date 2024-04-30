'use client'

import Lottie from "react-lottie-player";
import lottieJson from "@/public/json/loading.json"

const Loading = () => {
    return (
        <div>
            <div className=" flex justify-center items-center">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 300, height: 300 }}
                />
            </div>
        </div>
    );
};

export default Loading;