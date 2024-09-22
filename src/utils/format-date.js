// Function to format the date
export const formatDate = (dateString) => {
  // Add 'T00:00:00' to ensure the date is treated as a local date
  const date = new Date(`${dateString}T00:00:00`);
  const day = date.getDate();

  // Function to add the appropriate suffix to the day
  const daySuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) return 'st';
    if (day === 2 || day === 22) return 'nd';
    if (day === 3 || day === 23) return 'rd';
    return 'th';
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

  return formattedDate.replace(day, `${day}${daySuffix(day)}`);
};
