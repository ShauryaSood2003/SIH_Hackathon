import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Items=styled(Typography)`
    padding:10px 15px;
    color:#525252;
    font-weight:700;
    font-size:16px;
    &:hover{
        color:#f71e0f;
        border-bottom:2px solid #f71e0f;
        font-size:17px;
    }
`

const HeaderItems=({item,onClick})=>{
    return(
        <Items onClick={onClick}>{item}</Items>
    );
}

export default HeaderItems;