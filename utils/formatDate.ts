export const formatDate = (dateTime: string) => {
  const dateObj = new Date(dateTime); 
  
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${month}-${date}-${year}`;
};