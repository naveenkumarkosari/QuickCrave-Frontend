import landingImage from "../assets/landing.png"
import appdownloadImage from "../assets/appDownload.png"

const Homepage=()=>{
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-indigo-600">
                    Take your Order today
                </h1>
                <span className="text-xl">
                    Food is just a click away!
                </span>

            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="font-bold text-3xl tracking-tigher">
                        Order takeway even faster!
                    </span>
                    <span>
                        Download the  QuickCrave App for personalized recommendations and faster ordering
                    </span>
                    <img src={appdownloadImage}/>

                </div>

            </div>


        </div>

    )
}

export default Homepage;