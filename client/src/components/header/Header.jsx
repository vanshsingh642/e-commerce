import {AppBar , Toolbar, styled , Box, Typography} from '@mui/material'
import Search from './Search'

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height : 0;
`

const Subheading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55 }}>
                <Component>
                    <img src = "C:\Users\vansh\Desktop\295871758_387073043529256_5193011653701279085_n.jpg"
                    style={{width:75}}
                    ></img>
                    <Box>
                        <Subheading>Travelogue&nbsp;
                            <Box component="span" style={{color:'#ffe500'}}>Vansh</Box>
                        </Subheading>
                    </Box>
                </Component>
                <Search />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;