// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

const Header = (title, date, temp) => {
  const headerSection = document.createElement("div");
  const dateSection = document.createElement("span");
  const titleSection = document.createElement("h1");
  const tempSection = document.createElement("span");

  headerSection.appendChild(dateSection);
  headerSection.appendChild(titleSection);
  headerSection.appendChild(tempSection);

  headerSection.classList.add("header");
  dateSection.classList.add("date");
  tempSection.classList.add("temp");

  dateSection.textContent = date;
  titleSection.textContent = title;
  tempSection.textContent = temp;

  return headerSection;
};
// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

const headerAppender = (selector) => {
  const thingThing = document.querySelector(selector);
  const thingTwo = Header("title", "date", "temp");
  thingThing.appendChild(thingTwo);
};

export { Header, headerAppender };
