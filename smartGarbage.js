const smartGarbage = function (trash, bins) {
  if ( trash === 'recycling') {
    bins.recycling += 1
  }
  else if ( trash === 'waste') {
    bins.recycling += 1;
  }
  else if ( trash === 'compost') {
    bins.recycling += 1;
  }
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


