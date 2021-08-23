
import { ButtonContainer,ImageCarousel,ButtomTrans,Info,Title,Text,ButtomInfo } from "./styles";
import Image from 'next/image'
import img from '../../../public/slide/CAM.jpeg'


export default function Hero(){
    var Itens = [
        {
            image:"/slide/CAM.jpeg",
            title:"Bem vinde ao Site do CAM!",
            text:"Aqui você encontra tudo que precisa sobre o CAM:    Eventos, informações sobre diretorias, contato da gestão e muito mais. Aproveite!",
            more:null,
        },
        {
            image:"/slide/logocorvo.png",
            title:"O Corvo",
            text:"O Jornal O Corvo é uma Gazeta composta de contos, artigos e editoriais, todos eles escritos por estudantes de Mecânica e Mecatrônica.Quer publicar o sua matéria? Acesse o link e contribua com esse projeto incrível!",
            more:null,
            }
        ];
    
    function Muda(lista) {
        let pos=lista
        
        
    }

    return(
        <>
            <Image
                src={Itens[0].image}
                alt="Picture of the author"
                width={1600}
                height={670}
            />
        </>
        
    
    )
}
