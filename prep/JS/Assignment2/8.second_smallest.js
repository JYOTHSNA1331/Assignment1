const findSndSmallest = (x,y,z) => {
    return (Math.max(Math.min(x,y), Math.min(Math.max(x,y),z)))
};

