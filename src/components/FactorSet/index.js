import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import Chip from '@material-ui/core/Chip';

import { useGlobalState } from '../../globalState'

export default function Adder() {
    const [state, updateState] = useGlobalState()
    const [counter, setCounter] = React.useState(0)
    const addFactor = (event) => {
        // let tempOptions = state.options
        // tempOptions.push(counter)
        // setCounter(counter+1)
        // updateState('options', tempOptions)
        console.log(event.target.value)
    }
    return (
        <Autocomplete
            style={{ width: '500px' }}
            multiple
            options={[]}
            id="tags-filled"
            freeSolo
            onClose={addFactor}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="filled"
                    label="添加因素"
                    placeholder="因素"
                />
            )}
        />
    );
}
