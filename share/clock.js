const useDate = () => {
  const now = new Date();
  const hour = `${now.getHours()}`;
  const minute = `${now.getMinutes()}`;
  const month = `${now.getMonth() + 1}`;
  const day = `${now.getDate()}`;
  const weeks = `日一二三四五六`.split("");
  const week = weeks[now.getDay()];

  return {
    hour,
    minute,
    month,
    day,
    week,
  };
};

let showColon = true;
const clock = () => {
  const { hour, minute, month, day, week } = useDate();
  const $date = document.querySelector("#date");
  const $dateText = `${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )} 周${week}`;
  const $hour = document.querySelector("#hour");
  const $minute = document.querySelector("#minute");
  const $hourText = hour.padStart(2, "0");
  const $minuteText = minute.padStart(2, "0");

  if ($dateText !== $date.innerHTML) {
    $date.innerHTML = $dateText;
  }
  if ($hourText !== $hour.innerHTML) {
    $hour.innerHTML = $hourText;
  }
  if ($minuteText !== $minute.innerHTML) {
    $minute.innerHTML = $minuteText;
  }
  showColon = !showColon;
};

const isDarkDay = () => {
  const now = new Date();
  const hour = `${now.getHours()}`;

  if (location.hash === "#dark") {
    return true;
  } else if (location.hash === "#light") {
    return false;
  } else {
    return hour > 18 || hour < 8;
  }
};

const toggleColon = () => {
  const $colon = document.querySelector("#colon");
  $colon.classList.toggle("hidden");
};
const toggle = ($dom, addTheme) => {
  $dom.classList.remove("dark");
  $dom.classList.remove("light");
  $dom.classList.add(addTheme);
};
const toggleTheme = () => {
  const $theme = document.querySelector(".theme-container");
  const $date = document.querySelector("#date");
  const $timer = document.querySelector("#timer");

  if (isDarkDay()) {
    toggle($theme, "dark");
    toggle($date, "light");
    toggle($timer, "light");
  } else {
    toggle($theme, "light");
    toggle($date, "dark");
    toggle($timer, "dark");
  }
};

let timer = null;
const startClock = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    toggleTheme();
    toggleColon();
    clock();
  }, 1000);
};

export { startClock };
