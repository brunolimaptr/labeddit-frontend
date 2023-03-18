import styled from "styled-components"

export const MainLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
padding-top: 10vh;

.TituloLabeddit{
font-size: 40px;
}

.SubTitulo{
font-size: 16px;
font-family: IBM Plex Sans;
}

.InputEmail{
font-size: 18px;
box-sizing: border-box;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
margin-top: 12vh;
height: 6vh;
width: 86vw;
padding-left: 2vw;

}



.InputSenha{
font-size: 18px;
box-sizing: border-box;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
margin-top: 1vh;
height: 6vh;
width: 86vw;
padding-left: 2vw;  
}

.BotaoContinuar{
width: 350px;
height: 51px;
left: 29px;
top: 587px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
border: none;
margin-top: 8vh;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
cursor: pointer;
}

.Barra{
margin-top: 2vh;
width: 350px;
}

.BotaoCrieConta{
width: 350px;
height: 51px;
left: 29px;
top: 587px;
background: white;
border-radius: 27px;
border: 1px solid  #FE7E02; 
margin-top: 2vh;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FE7E02;
cursor: pointer;
}

.BarraInferior{
margin-top: 20vh;
}



`