import * as React from 'react';
import Rating from '@material-ui/core/Rating';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';

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

export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div>
            <TextField label="XXX因素"   variant="standard"/>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
        </div>
    );
}
