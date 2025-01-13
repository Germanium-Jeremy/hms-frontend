export default function makeDateReadable(date) {
     const date = new Date(dateString);

     const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
     };

     const humanReadableDate = date.toLocaleString("en-US", options);
     return humanReadableDate
}