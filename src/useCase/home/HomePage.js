import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


import PageCmp from "../../component/PageCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import openLinkInNewTab from "../../service/utils/openLinkInNewTab";
import systems from "../../constant/SYSTEMS";

const HomePage = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 800);
    }, []);

    return <PageCmp title="Strona główna" loaded={loaded}>
        <Container>
            {
                systems.map((system, index)=><TileCmp
                    title={system.title}
                    subtitle={system.subtitle}
                    path={system.path}
                    icon={system.icon}
                    external={true}/>)
            }
        </Container>
    </PageCmp>
}

const TileCmp = ({title, subtitle, icon, path, external}) => {

    function tileOnClick() {
        if(external)
           openLinkInNewTab(path);
        else
            navigate(path);
    }

    const navigate = useNavigate();
    return <Tile onClick={tileOnClick}>
        <TileHeader>{title}</TileHeader>
        <FontAwesomeIcon icon={icon} size={"5x"}/>
        {subtitle && <TileSubheader>{subtitle}</TileSubheader> }
    </Tile>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
`;

const Tile = styled.div`
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  width: 15%;
  height: 25vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.faded}
  }
`;

const TileHeader = styled.h3`
    margin: 0 0 2rem 0;
`;

const TileSubheader = styled.h6`
    margin: 2rem 0 0 0;
`;
export default HomePage;