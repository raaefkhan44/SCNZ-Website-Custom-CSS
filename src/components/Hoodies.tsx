import"../styles/hoodies.css"
import Image from "next/image";
interface HoodiesType {
    image: string,
    name: string, 
}

export default  function HoodiesCard({image,name}:HoodiesType){
    return(
        <div className="project-item">
            <Image 
            src={image}
            alt="winter-wear"
            width={300}
            height={250}
            className="scnz"
            />
            <h3>{name}</h3>
        </div>
    )
} 