import { startClock } from "./share/clock";
import "./clock.css";
document.querySelector("#app").innerHTML = `
<div class="theme-container light">
    <div id="date" class="dark">**-** **</div>
    <div id="timer" class="dark">
        <span id="hour">**</span><span id="colon">:</span><span id="minute">**</span>
    </div>
</div>
`;

window.onload = () => {
  startClock();
};
