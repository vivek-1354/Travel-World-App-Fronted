import '../Filter.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export function PriceRange() {
    return (
        <div className="filter-container">
            <span className="filter-label">Price Range</span>
            <Box sx={{ width: 300 }}>
                <Slider
                    className='price-range'
                    getAriaLabel={() => 'Minimum Difference'}
                    value={""}
                    onChange={""}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    min={100}
                    max={25000}
                    disableSwap
                />
            </Box>
        </div>

    );
}
