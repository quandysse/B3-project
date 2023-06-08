import HomeImage from "../components/HomeImage/HomeImage";
import Top from "../components/Top/Top";
import SpecialMentions from "../components/SpecialMentions/SpecialMentions";
import FilmSeries from "../components/FilmSeries/FilmSeries";
import ThemedArticles from "../components/ThemedArticles/ThemedArticles"


export default function Accueil(){
    return (
        <>
            <HomeImage />
            <Top />
            <SpecialMentions />
            <FilmSeries />
            <ThemedArticles />
        </>

        
    )
}