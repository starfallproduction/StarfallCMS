import React, {useState, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DeleteField} from '../redux/actions/documentActions';
import {List, ListItem, Typography, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import PropTypes from 'prop-types';

import {selectCurrentDocumentKeys} from '../redux/selectors/documentSelectors';
import DocumentAddField from './DocumentAddField';
import DocumentAddButton from './DocumentAddButton';
import DocumentField from './DocumentField';

function DocumentContainerField(props){
    const {keys} = props;
    const dispatch = useDispatch();
    const selectKeys = useMemo(selectCurrentDocumentKeys, []);
    const curKeys = useSelector(state => selectKeys(state, keys));
    const [add, setAdd] = useState(false);

    return(
        <List>
            <ListItem>
                <Typography>{keys[keys.length - 1]}</Typography>
                <IconButton
                    color="inherit"
                    aria-label={`Delete ${keys[keys.length - 1]}`}
                    onClick={() => dispatch(DeleteField(keys))}
                    edge="end"
                >
                    <Delete/>
                </IconButton>
            </ListItem>
            {
                curKeys.map(value => {
                    const {key, type} = value;
                    const temp = [...keys, key];
                    if(type.constructor === Object || type.constructor === Array){
                        return(
                            <DocumentContainerField key={key} keys={temp}/>
                        )
                    }else{
                        return(
                            <DocumentField key={key} keys={temp} category={type}/>
                        )
                    }
                })
            }
            {
                add 
                ? <DocumentAddField keys={keys} cancel={() => setAdd(false)}/> 
                : null
            }
            <DocumentAddButton add={() => setAdd(true)}/>
        </List>
    )
}

DocumentContainerField.propTypes = {
    keys: PropTypes.array.isRequired
}

export default DocumentContainerField;