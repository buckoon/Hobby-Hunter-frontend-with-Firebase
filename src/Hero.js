import React, { useState } from 'react';






function Hero() {
    const [about, setAbout] = useState(true)
const handleChange = () =>{
    setAbout(!about);
}
  return (
    <div className= "w-full h-screen">
        <img className="top-0 left-0 w-full h-screen object-cover" src="https://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg" alt='/'/>
        <div className="bg-black/40 absolute top-0 left-0 w-full h-screen"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                <p>Greetings,</p>
                <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Welcome to Hobby Hunter!</h1>
                <div className="flex flex-col items-center mt-8">
                    <button className="text-3xl bg-white text-black  hover:bg-green-600 transition duration-150 ease-in-out border py-2 px-3 rounded-full "onClick={handleChange}>About </button>
                    {about ? <p></p> :
                    <p className ="max-w-[600px] drop-shadow-2xl py-2 mt-2 rounded-lg text-lg text-white bg-black/60">
                    Attention all adventurers, boredom busters, and thrill-seekers! Are you ready to try something new and exciting? Look no further! Our platform is the perfect place for you to discover a new hobby and unleash your inner adventurer. From raising chickens to fishing to riding bikes, we offer a wide variety of hobbies for you to choose from. Plus, if you're passionate about your hobby and want to share your knowledge with others, this is the perfect platform for you too! Don't wait any longer, register today and start exploring your new hobby!
                    </p>}
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Hero