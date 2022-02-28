
import  styled  from 'styled-components';

const Container= styled.div`
    padding-top: 60px;
    height: 30px;
    background-color:#aa808a;
    // background-color:#a48e89;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    font-family: 'Roboto Serif', sans-serif;
`;

const Announcement = () => {
  return (
    <Container>Super Deal!</Container>
  )
}

export default Announcement