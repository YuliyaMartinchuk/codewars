function pillars(numPill, dist, width) {
    if (numPill<2) {
        return 0
    }  return (numPill-1)*dist*100+width*(numPill-2)
}