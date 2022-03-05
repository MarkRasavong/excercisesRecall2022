const handleToggle = (value) => {
  const currentIdx = selected.indexOf(value);
  const newSelected = [...selected];

  if (currentIdx === -1) {
    newSelected.push(value);
  } else {
    newSelected.splice(currentIdx, 1);
  }

  setSelected(newSelected);
};