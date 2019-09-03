import React, {lazy} from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';

import OverviewList from './OverviewList';

const OverviewCardAction = lazy(() => import('./OverviewCardAction'));

const Index = ({index}) => <Avatar>{index}</Avatar>;
const Title = ({name}) => <Typography variant="h4" style={{ color: "black" }}>{name}</Typography>

function Detail({primary}){
    return(
        <OverviewList listItemProp={{dense: true}}
            listItemTextProp={{
                primaryTypographyProps:{variant: 'body2'},
                primary: primary
            }}
        />
    )
}

// Overview Card actions will only available for creator
// actions consist of renaming and deleting Project
// and those action need Creator Authorization
function OverviewCard(props){
    const {name, index, id, img, updated, created, publicKey, authorized} = props;
    
    return(
        <Grid item container xs={12} justify="center">
            <Box component={Card} bgcolor='#fafafa' my={1.5} width={1} elevation={3}>
                <CardHeader 
                    avatar={<Index index={index}/>} 
                    title={<Title name={name}/>}
                    action={authorized 
                        ? <OverviewCardAction id={id} name={name}/> 
                        : null
                    }
                />
                <Box component={CardMedia} height={250} title={name}
                    image={img}
                />
                <CardContent component={List}>
                    <Detail primary={`Public Key: ${publicKey}`}/>
                    <Detail primary={`Created At: ${created}`}/>
                    <Detail primary={`Updated At: ${updated}`}/>
                </CardContent>
            </Box>
        </Grid>
    );
}

export default OverviewCard;