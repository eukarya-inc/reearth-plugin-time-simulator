reearth.ui.show(`
<style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    height: 100px;
    width: 100%;
    overflow: hidden;
    color: white;
    font-family: "Noto Sans";
    font-size: 12px;
  }

  #wrapper {
    height: 100px;
    max-height: 500px;
    border-radius: 5px;
  }

  #header {
    height: 44px;
    position: relative;
    overflow: hidden;
    font-family: "Roboto";
    font-style: normal;
    font-size: 14px;
    border-radius: 5px;
    background: #FFFFFF;
    color: #00BEBE;
  }

  #header div {
    display: inline-block;
  }

  #plugin-icon-div {
    width: 44px;
    height: 44px;
    position: relative;
  }

  #plugin-icon {
    padding-left: 12px;
    padding-top: 12px;
  }

  #close-plugin-btn {
    display: none;
    float: right;
    padding-top: 10px;
    padding-right: 12px;
  }

  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #container {
    padding-bottom: 15px;
    border-radius: 4px;
    display: flex;
    color: #373737;
    margin-left: 10px;
    margin-right: 14px;
  }

  .cursor-btn {
    cursor: pointer;
  }

  /**/
  #current-time-display {
    width: 62px;
    height: 32px;
    line-height: 32px;
    border-radius: 4px;
    border: 1px solid #C7C7C7;
    text-align: center;
  }
  #txtTime::-webkit-calendar-picker-indicator { 
    background: none; 
    display:none; 
    }
  #txtTime {
    border: none;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 14px;
    margin-left: -4px;
  }
  #txtTime:focus {
    outline-width: 0;
  }

  #timeslider {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #C7C7C7;
    margin-left: 10px;
  }

  #ruler {
    height: 100%;
  }

  #ruler-top { 
    height: 50%;
  }

  #ruler-bottom {
    display: flex;
    height: 50%;
    width: 100%;
    align-items: end;
    padding-left: 9px;
  }

  .hour {
    width: 2mm;
    border-left: 1px solid #878282;
    height: 10px;
  }

  .hour-0, .hour-24  {
    border-left: 2px solid #878282;
    height: 14px;
    width: 2mm;
  }

  .hour-12{
    border-left: 1px solid #878282;
    height: 14px;
    width: 2mm;
  }

  #ruler-end-time {
    float: right;
    padding-right: 9px;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 12px;
  }

  #ruler-start-time {
    padding-left: 8px;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 12px;
  }

  /*Slider*/
  .slider {
  -webkit-appearance: none;
  width: 222px;
  height: 0px;
  border-radius: 5px;
  background: red;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  position: absolute;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 26px;
  border: 0;
  background: url('data:image/svg+xml,<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16 12.4183 8 25.5 8 25.5C8 25.5 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="%2300BEBE"/></svg>');
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 26px;
  border: 0;
  background: url('data:image/svg+xml,<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16 12.4183 8 25.5 8 25.5C8 25.5 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="%2300BEBE"/></svg>');
  cursor: pointer;
}
  
</style>
<div id="wrapper">
  <div id="header" class="cursor-btn" onclick="openClosePlugin()">
    <div id="plugin-icon-div">
      <svg id="plugin-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17.875C13.797 17.875 16.875 14.797 16.875 11C16.875 7.20304 13.797 4.125 10 4.125C6.20304 4.125 3.125 7.20304 3.125 11C3.125 14.797 6.20304 17.875 10 17.875Z" stroke="#00BEBE" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M10 11.0001L13.0936 7.90649" stroke="#00BEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.125 1.625H11.875" stroke="#00BEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
    <div class="vertical-center" id="plugin-title">
      Time simulation
    </div>

    <span id="close-plugin-btn" >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.625 4.375L4.375 15.625" stroke="#595959" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M15.625 15.625L4.375 4.375" stroke="#595959" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
  </div>
  <div id="container">
    <div id="current-time-display">
      <input type="time" name="txtTime" id="txtTime"/>
    </div>
    <div id="timeslider">
      <div id="ruler">
        <div id="ruler-top">
          <span id="ruler-start-time">00:00</span>
          <span id="ruler-end-time">23:59</span>
        </div>
        <div>
          <input type="range" min="0" max="86400" value="0" class="slider" id="myRange">   
        </div>
        <div id="ruler-bottom">
          <div class="hour-0"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour-12"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour"></div>
          <div class="hour-24"></div>
        </div>
          </div>
    </div>
  </div>

  <script>
    let backgroundColor = "#FFFFFF"
    let reearth, interval
    let expanded = false
    let wrapperElm = document.getElementById("wrapper")
    let offsetHeight = wrapperElm.offsetHeight

    let isPlacingStartPoint = false
    let isPlacingEndPoint = false

    let closePluginElm = document.getElementById("close-plugin-btn")

    let slider = document.getElementById("myRange");
    //let currentTimeDisplay = document.getElementById("current-time-display");
    let currentTimeDisplay = document.getElementById("txtTime");
    let reearthCurrentTime

    function openClosePlugin() {
      expanded = !expanded
      if (expanded) {
        wrapperElm.style.height = "auto"
        wrapperElm.style.backgroundColor = backgroundColor
        closePluginElm.style.display = "block"
      } else {
        offsetHeight = wrapperElm.offsetHeight
        document.getElementById("wrapper").style.height = "44px"
        wrapperElm.style.backgroundColor = "transparent"
        closePluginElm.style.display = "none"
      }
      parent.postMessage({ type: "resize", expanded, height: offsetHeight }, "*");
    }

    function resizePlugin() {
      parent.postMessage({ type: "resize", expanded, height: document.getElementById("wrapper").offsetHeight }, "*");
    }

    
    window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
      reearth = e.source.reearth

      if(!document.getElementById("txtTime").value) {
        reearthCurrentTime = new Date(reearth.clock.currentTime);
          let timeSum = reearthCurrentTime.getHours() * 3600 
            + reearthCurrentTime.getMinutes() * 60 
            + reearthCurrentTime.getSeconds();
          slider.value = timeSum;
          updateTimeDisplay(timeSum);
          startInterval(timeSum); 
      }
     
    })

    slider.oninput = function() {
      let sliderValue = parseInt(this.value)
      
      startInterval(sliderValue);
    }


    currentTimeDisplay.oninput = function () {
      let time = document.getElementById("txtTime").value
      let [hours, minutes] = time.split(":")
      
      let timeSum = hours * 3600 + minutes * 60 

      slider.value = timeSum;
      updateTimeDisplay(timeSum);
      startInterval(timeSum); 
    }

    function startInterval(initialValue) {
      let sliderValue = initialValue;

      slider.value = sliderValue;
      let timeValue = updateTimeDisplay(sliderValue);
      setTimelineReearth(timeValue.hours, timeValue.minutes, timeValue.seconds);

      clearInterval(interval);
      
      interval = setInterval(function() {

        sliderValue += 60;
        
        slider.value = sliderValue;

        let timeValue = updateTimeDisplay(sliderValue);
        setTimelineReearth(timeValue.hours, timeValue.minutes, timeValue.seconds);

        if (sliderValue >= 86400) {
          clearInterval(interval);
        }
        
      }, 60000);
    }

    function updateTimeDisplay(secondsSum) {
      let hours = Math.floor(secondsSum / 3600)
      let minutes = Math.floor((secondsSum % 3600) / 60)
      let seconds = Math.floor(secondsSum % 60);
      if(secondsSum == 86400) {
        minutes = 59
        hours = 23
      }
      
      currentTimeDisplay.value = padWithLeadingZeros(hours,2) + ":" + padWithLeadingZeros(minutes,2);

      return { hours, minutes, seconds };
    }


    function setTimelineReearth(hours, minutes, seconds) {
      //Set value for timeline on reearth
      reearthCurrentTime.setHours(hours)
      reearthCurrentTime.setMinutes(minutes)
      reearthCurrentTime.setSeconds(seconds)

      // Format the UTC date as a string
      let formattedUtcTimestamp = reearthCurrentTime.toISOString();
      
      reearth.scene.overrideProperty({
        timeline: {
            current: formattedUtcTimestamp
        },
      });
    }

    function padWithLeadingZeros(num, totalLength) {
      return String(num).padStart(totalLength, '0');
    }


  </script>
  `,{width: 312, height: 44});

  reearth.ui.postMessage({
  type: "initWidget",
  reearth: reearth
  });

  reearth.on("message", (msg) => {
  if (msg.type === "resize") {
  reearth.ui.resize?.(
  msg.expanded ? 312 : 312,
  msg.expanded ? 100 : 44,
  msg.expanded ? undefined : true);
  } else if (msg.type === "initWidget") {
  reearth.ui.postMessage({
  type: "initWidget"
  });
  }
  });


  reearth.on("update", send);
  send();

  function send() {
  reearth.ui.postMessage({
  type: "updateWidget",
  property: reearth.widget.property,
  });
  }