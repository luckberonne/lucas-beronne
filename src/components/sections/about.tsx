import Image from "next/image";
import yo from "./../../assets/yo.png";


const About: React.FC = () => {
    return (
        <div id="about" className="grid lg:grid-cols-2 md:grid-col-1 gap-4 items-center justify-center pt-8 border-t-2 mb-10">
            <div className="col-span-1 border-r-2"> 
                <h1 className="text-7xl text-end">Sobre Mi</h1>
                <p className="text-end">
                    Soy estudiante de Ingeniería en Sistemas De Información en la Universidad
                    Tecnológica Nacional. Me considero una persona responsable, social,
                    comprometido al emprender y ampliar mis conocimientos en el rubro IT.
                </p>

            </div>
            <div className="col-span-1 flex justify-center items-center ">
                <Image src={yo} alt="Lucas Beronne" width={200} height={200} className="rounded-full"/>
            </div>
        </div>
    );
};

export default About;