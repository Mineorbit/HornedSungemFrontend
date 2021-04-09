import { Box, List } from 'grommet';
import React from 'react';
import { useHistory } from 'react-router';
import { ModulesListEntry } from './ModulesListEntry';
import { CPTag, Tag } from '../common/Tag';
import { ModuleTags } from '../common/ModuleTags';

export const ModulesList = (props) => {

    let history = useHistory();

    return ( 
        <Box width='large'>
            <List
                primaryKey='name'
                secondaryKey='cp'
                data={props.modules}
                paginate
                step={12}>
                    {module => 
                        <Box onMouseOver={() => props.setChosenModule(module)} onClick={() => history.push('/module/' + module.id.replace('/', '_'))}>
                            <ModulesListEntry module={module}>
                                <ModuleTags module={module} />
                            </ModulesListEntry>
                        </Box>
                        }    
            </List>
        </Box>
    );
};