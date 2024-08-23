const items = document.querySelectorAll(".item");
let imageURLs = [
  "image/gateau.jpg",
  "image/gateau1.jpg",
  "image/gateau2.jpg",
  "image/gateau3.jpg",
  "image/gateau5.jpg",
];

// initially empty

let deviceType = "";
let events = {
  mouse: {
    // quand la sourit passe dessus
    start: "mouseover",
    end: "mouseout",
  },
  touch: {
    // quand tu touche les image
    start: "touchstart",
    end: "touchend",
  },
};

const isTouchDevice = () => {
  // l'elemnt div sera touche un evenment
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch"; // si il touche c'est vrai
    return true;
  } catch (e) {
    // si il l'attrape c'est faux
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

items.forEach((item, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imageURLs[index]);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  item.appendChild(img);

  //initial CSS properties for all items
  item.style.flex = "1";
  item.style.transition = "flex 0.8s ease";

  item.addEventListener(events[deviceType].start, () => {
    item.style.flex = "6";
  });
  item.addEventListener(events[deviceType].end, () => {
    item.style.flex = "1";
  });

});
