import hero from "../assets/Hero.jpg"

const Hero=()=>{
    return(
      <div>
      <img src={hero} className="w-full max-h-[600px] object-fit:contain"/>
      </div>
    ) 

}

export default Hero;