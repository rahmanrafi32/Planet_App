import {MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg} from "../svg";

const renderImage = name =>{
    switch (name){
        case "mercury":
            return <MercurySvg/>
        case "venus":
            return  <VenusSvg/>
        case "earth":
            return  <VenusSvg/>
        case "mars":
            return  <VenusSvg/>
        case "jupiter":
            return  <VenusSvg/>
        case "saturn":
            return <SaturnSvg/>
        case "uranus":
            return <UranusSvg/>
        case "neptune":
            return <NeptuneSvg/>
        default:
            return ;
    }
};

export default renderImage;