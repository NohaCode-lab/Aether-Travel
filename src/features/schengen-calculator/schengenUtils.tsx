export const calculateSchengenDays = (entryDate: string, exitDate: string) => {
  const start = new Date(entryDate);
  const end = new Date(exitDate);
  
  // Calculate the difference in time
  const differenceInTime = end.getTime() - start.getTime();
  
  // Calculate the difference in days (+1 to include both entry and exit days)
  const usedDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1;
  
  const maxDays = 90;
  const remainingDays = Math.max(0, maxDays - usedDays);
  const overstay = usedDays > maxDays;
  
  return {
    usedDays,
    remainingDays,
    overstay,
  };
};