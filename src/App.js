import React, { createElement } from "react";
import "./App.css";

export default function App() {
  const data = [
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHMAcwMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwUGAQIDBP/EAC8QAAIBBAEDAQYGAwEAAAAAAAABAgMEBRESBiExExQyQVFhgQcVIlJxkTNiciP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAHREBAQEBAAEFAAAAAAAAAAAAAAECERIDITFBYf/aAAwDAQACEQMRAD8AuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1jOM98Wnp67M5fgjtpHI9PX+UzGBqNp5OrC5spzfpXKclp/wCs9tx5L48d7WzLeNmbfhYwaJlPxKxf5C6+CnG9y9TUKWOl2q05/H1I+YqPfb8dtJ90Y/pH8UKeQqZJ9UexYSnbKPoU6tSSnV97k05a5eF2S33/AINYpZwntbRH8zk8n1HY5HJ3069DHWtpUuKONhNwT1GUoKrr35PW3HfFdlp+SodO2lOwwGNs6P8AjoWtKnH+FFIzqrmySsiADUgAAAAAAAAAA6VZcKcpvxFNkpxtxTp9Lw9fnKrk3cVlx8p1JTmv65Jb/gq1aHqUpw/dFoi7m7WNTDVYync4m4lFT4biqUv1RW1rvpxTX038idTvHX0t+Pb+PXC9PqlY3WRoQpe1uu41m3qVRyal534XKPb5J/f4s5h/zOVS2vZSiqMXFRhPipVNbUuz7pdml9XvwZOnir/IqUKV0rK4t5K7p2tX/wA51oqOuynr9Mmtcvhx+p45mnTq5jE8KsKuXyj3TsqNSnJ0UoNvck2l7se+++mu6GfLt65Mth7i2qUK2NulKM6kG5ya7VFLlHSfz4xXb6/Rm69FXFS56UxcriXKvC3jSqy/dOH6JP7uLJ8qd1hchU1G2jXpajWfqOSa0nxcnHv58/Bm4/hrfUbrpehRjKPtVtKVO7ivEarfNtf6vlyT+TQmeW1136k1jM+42sAFOQAAAAAAAAAAMZ1NlPyXp/IZNQ9SVrbzqxhvXJpbSIr0/l6M8XSubqVX17jdavWdKbU5ye3KUktL++3jwkXi5t6VzRlRrwU6cvejLwzq7O24cPQp8da0ogQ3rWwfVPSNL2HjdXmJbrW3pvk6ts9KcVrzwfF/8+DGfhPg1hepHn8rXt4WFhbVJyqwnuMZyWoptry4uT+xYsl0Jibu49rto1LK7T5KvazdKe/nuOt/c4tujIVa1GpnshcZaFvP1KFC4hTVOE/3uMYxUpd/L3oKlz42We7TcXY5nq2vOvY0/ZLKrN1Kt/cRf6+T21RjtNrv7z7fJPybr0T0Za9JO+lbXNetO9lGVX1HHXJb7pJLu99zZ4xjGKUYpJeEvgchIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z",
      name: "Tom",
      batch: "B45WD"
    },
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHMAcwMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwUGAQIDBP/EAC8QAAIBBAEDAQYGAwEAAAAAAAABAgMEBRESBiExExQyQVFhgQcVIlJxkTNiciP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAHREBAQEBAAEFAAAAAAAAAAAAAAECERIDITFBYf/aAAwDAQACEQMRAD8AuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1jOM98Wnp67M5fgjtpHI9PX+UzGBqNp5OrC5spzfpXKclp/wCs9tx5L48d7WzLeNmbfhYwaJlPxKxf5C6+CnG9y9TUKWOl2q05/H1I+YqPfb8dtJ90Y/pH8UKeQqZJ9UexYSnbKPoU6tSSnV97k05a5eF2S33/AINYpZwntbRH8zk8n1HY5HJ3069DHWtpUuKONhNwT1GUoKrr35PW3HfFdlp+SodO2lOwwGNs6P8AjoWtKnH+FFIzqrmySsiADUgAAAAAAAAAA6VZcKcpvxFNkpxtxTp9Lw9fnKrk3cVlx8p1JTmv65Jb/gq1aHqUpw/dFoi7m7WNTDVYync4m4lFT4biqUv1RW1rvpxTX038idTvHX0t+Pb+PXC9PqlY3WRoQpe1uu41m3qVRyal534XKPb5J/f4s5h/zOVS2vZSiqMXFRhPipVNbUuz7pdml9XvwZOnir/IqUKV0rK4t5K7p2tX/wA51oqOuynr9Mmtcvhx+p45mnTq5jE8KsKuXyj3TsqNSnJ0UoNvck2l7se+++mu6GfLt65Mth7i2qUK2NulKM6kG5ya7VFLlHSfz4xXb6/Rm69FXFS56UxcriXKvC3jSqy/dOH6JP7uLJ8qd1hchU1G2jXpajWfqOSa0nxcnHv58/Bm4/hrfUbrpehRjKPtVtKVO7ivEarfNtf6vlyT+TQmeW1136k1jM+42sAFOQAAAAAAAAAAMZ1NlPyXp/IZNQ9SVrbzqxhvXJpbSIr0/l6M8XSubqVX17jdavWdKbU5ye3KUktL++3jwkXi5t6VzRlRrwU6cvejLwzq7O24cPQp8da0ogQ3rWwfVPSNL2HjdXmJbrW3pvk6ts9KcVrzwfF/8+DGfhPg1hepHn8rXt4WFhbVJyqwnuMZyWoptry4uT+xYsl0Jibu49rto1LK7T5KvazdKe/nuOt/c4tujIVa1GpnshcZaFvP1KFC4hTVOE/3uMYxUpd/L3oKlz42We7TcXY5nq2vOvY0/ZLKrN1Kt/cRf6+T21RjtNrv7z7fJPybr0T0Za9JO+lbXNetO9lGVX1HHXJb7pJLu99zZ4xjGKUYpJeEvgchIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z",
      name: "Tom",
      batch: "B45WD"
    },
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHMAcwMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwUGAQIDBP/EAC8QAAIBBAEDAQYGAwEAAAAAAAABAgMEBRESBiExExQyQVFhgQcVIlJxkTNiciP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAHREBAQEBAAEFAAAAAAAAAAAAAAECERIDITFBYf/aAAwDAQACEQMRAD8AuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1jOM98Wnp67M5fgjtpHI9PX+UzGBqNp5OrC5spzfpXKclp/wCs9tx5L48d7WzLeNmbfhYwaJlPxKxf5C6+CnG9y9TUKWOl2q05/H1I+YqPfb8dtJ90Y/pH8UKeQqZJ9UexYSnbKPoU6tSSnV97k05a5eF2S33/AINYpZwntbRH8zk8n1HY5HJ3069DHWtpUuKONhNwT1GUoKrr35PW3HfFdlp+SodO2lOwwGNs6P8AjoWtKnH+FFIzqrmySsiADUgAAAAAAAAAA6VZcKcpvxFNkpxtxTp9Lw9fnKrk3cVlx8p1JTmv65Jb/gq1aHqUpw/dFoi7m7WNTDVYync4m4lFT4biqUv1RW1rvpxTX038idTvHX0t+Pb+PXC9PqlY3WRoQpe1uu41m3qVRyal534XKPb5J/f4s5h/zOVS2vZSiqMXFRhPipVNbUuz7pdml9XvwZOnir/IqUKV0rK4t5K7p2tX/wA51oqOuynr9Mmtcvhx+p45mnTq5jE8KsKuXyj3TsqNSnJ0UoNvck2l7se+++mu6GfLt65Mth7i2qUK2NulKM6kG5ya7VFLlHSfz4xXb6/Rm69FXFS56UxcriXKvC3jSqy/dOH6JP7uLJ8qd1hchU1G2jXpajWfqOSa0nxcnHv58/Bm4/hrfUbrpehRjKPtVtKVO7ivEarfNtf6vlyT+TQmeW1136k1jM+42sAFOQAAAAAAAAAAMZ1NlPyXp/IZNQ9SVrbzqxhvXJpbSIr0/l6M8XSubqVX17jdavWdKbU5ye3KUktL++3jwkXi5t6VzRlRrwU6cvejLwzq7O24cPQp8da0ogQ3rWwfVPSNL2HjdXmJbrW3pvk6ts9KcVrzwfF/8+DGfhPg1hepHn8rXt4WFhbVJyqwnuMZyWoptry4uT+xYsl0Jibu49rto1LK7T5KvazdKe/nuOt/c4tujIVa1GpnshcZaFvP1KFC4hTVOE/3uMYxUpd/L3oKlz42We7TcXY5nq2vOvY0/ZLKrN1Kt/cRf6+T21RjtNrv7z7fJPybr0T0Za9JO+lbXNetO9lGVX1HHXJb7pJLu99zZ4xjGKUYpJeEvgchIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z",
      name: "Tom",
      batch: "B45WD"
    }
  ];
  return (
    <div className="App">
      {data.map((profile, index) => (
        <Profile
          key={index}
          image={profile.image}
          name={profile.name}
          batch={profile.batch}
        />
      ))}
    </div>
  );
}

function Profile({ image, name, batch }) {
  return (
    <div className="Profile">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{batch}</p>
    </div>
  );
}

