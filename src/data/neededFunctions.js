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
     };

     const humanReadableDate = date2.toLocaleString("en-US", options);
     return humanReadableDate
}

const truncateText = (fullNames, limit) => {
     if (fullNames.length > limit) {
          return fullNames.substring(0, limit) + '...'
     }
     return fullNames
}

export { makeDateReadable, truncateText }