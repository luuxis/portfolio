'use client';

import { Star, StarHalf, StarBorder } from "@mui/icons-material";

export default ({ level }) => {
    const full = Math.floor(level);
    const half = level % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
        <div className="flex space-x-1 text-yellow-400">
            {Array(full).fill(null).map((_, i) => <Star key={`full-${i}`} fontSize="small" />)}
            {half && <StarHalf fontSize="small" />}
            {Array(empty).fill(null).map((_, i) => <StarBorder key={`empty-${i}`} fontSize="small" />)}
        </div>
    );
};
