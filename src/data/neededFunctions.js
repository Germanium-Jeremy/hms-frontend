const makeDateReadable = (date) => {
     const date2 = new Date(date);
 
     const options = {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
         hour: "numeric",
         minute: "numeric",
         second: "numeric",
         timeZone: 'Africa/Kigali'
     };
 
     // Ensure the locale is set to 'rw-RW'
     const humanReadableDate = new Intl.DateTimeFormat('rw-RW', options).format(date2);
     return humanReadableDate;
}

const truncateText = (fullNames, limit) => {
     if (fullNames.length > limit) {
          return fullNames.substring(0, limit) + '...'
     }
     return fullNames
}

export { makeDateReadable, truncateText }