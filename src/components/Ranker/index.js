import * as React from 'react';
import Rating from '@material-ui/core/Rating';
import Box from '@material-ui/core/Box'
// import H2 from '@material-ui/core/H2';
import StarIcon from '@material-ui/icons/Star';
import { useGlobalState } from '../../globalState'

const labels = {
    0.5: '不重要',
    1: '不太重要',
    1.5: '有点重要',
    2: '一般重要',
    2.5: '比较重要',
    3: '重要',
    3.5: '较为重要',
    4: '非常重要',
    4.5: '相当重要',
    5: '超级重要',
};

export default function HoverRating(props) {
    const { name, belong, ind } = props
    const [state, updateState] = useGlobalState()
    // const [value, setValue] = React.useState(Math.floor(Math.random()*5));
    const [hover, setHover] = React.useState(-1);
    React.useEffect(() => {

        let temp = state.scores
        if (!temp[belong][ind])
            // temp[belong][ind] = Math.floor(Math.random() * 5)
            temp[belong][ind] = 0
        updateState('scores', temp)

    }, [])

    return (
        <div>
            <h2>{name + "因素"}</h2>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={state.scores[belong][ind]}
                    // precision={0.5}
                    onChange={(event, newValue) => {
                        let temp = state.scores
                        temp[belong][ind] = newValue ? newValue : 0
                        // console.log(temp)
                        updateState('scores', temp)
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <i>得分</i>
                {state.scores[belong][ind] !== null && (
                    <Box sx={{ ml: 2 }}>{hover !== -1 ? hover : state.scores[belong][ind]}</Box>
                )}
            </Box>
        </div>
    );
}
