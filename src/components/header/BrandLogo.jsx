import styled from "@emotion/styled";


const ImageStyled=styled('img')({
    width:150,
    height:110
})

const BrandLogo=()=>{
    return(
        <ImageStyled src="https://t4.ftcdn.net/jpg/03/17/27/59/360_F_317275919_0Lmoy6CZqKyfErASnFJ2tatCtg18GVF6.jpg" alt="Logo"></ImageStyled>
    );
}
export default BrandLogo;