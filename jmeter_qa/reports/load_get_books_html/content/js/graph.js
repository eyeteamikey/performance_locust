/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 120.0, "minX": 0.0, "maxY": 2332.0, "series": [{"data": [[0.0, 120.0], [0.1, 120.0], [0.2, 120.0], [0.3, 120.0], [0.4, 120.0], [0.5, 120.0], [0.6, 120.0], [0.7, 120.0], [0.8, 120.0], [0.9, 120.0], [1.0, 120.0], [1.1, 120.0], [1.2, 120.0], [1.3, 120.0], [1.4, 120.0], [1.5, 120.0], [1.6, 120.0], [1.7, 120.0], [1.8, 120.0], [1.9, 120.0], [2.0, 121.0], [2.1, 121.0], [2.2, 121.0], [2.3, 121.0], [2.4, 121.0], [2.5, 121.0], [2.6, 121.0], [2.7, 121.0], [2.8, 121.0], [2.9, 121.0], [3.0, 121.0], [3.1, 121.0], [3.2, 121.0], [3.3, 121.0], [3.4, 121.0], [3.5, 121.0], [3.6, 121.0], [3.7, 121.0], [3.8, 121.0], [3.9, 121.0], [4.0, 122.0], [4.1, 122.0], [4.2, 122.0], [4.3, 122.0], [4.4, 122.0], [4.5, 122.0], [4.6, 122.0], [4.7, 122.0], [4.8, 122.0], [4.9, 122.0], [5.0, 122.0], [5.1, 122.0], [5.2, 122.0], [5.3, 122.0], [5.4, 122.0], [5.5, 122.0], [5.6, 122.0], [5.7, 122.0], [5.8, 122.0], [5.9, 122.0], [6.0, 127.0], [6.1, 127.0], [6.2, 127.0], [6.3, 127.0], [6.4, 127.0], [6.5, 127.0], [6.6, 127.0], [6.7, 127.0], [6.8, 127.0], [6.9, 127.0], [7.0, 127.0], [7.1, 127.0], [7.2, 127.0], [7.3, 127.0], [7.4, 127.0], [7.5, 127.0], [7.6, 127.0], [7.7, 127.0], [7.8, 127.0], [7.9, 127.0], [8.0, 129.0], [8.1, 129.0], [8.2, 129.0], [8.3, 129.0], [8.4, 129.0], [8.5, 129.0], [8.6, 129.0], [8.7, 129.0], [8.8, 129.0], [8.9, 129.0], [9.0, 129.0], [9.1, 129.0], [9.2, 129.0], [9.3, 129.0], [9.4, 129.0], [9.5, 129.0], [9.6, 129.0], [9.7, 129.0], [9.8, 129.0], [9.9, 129.0], [10.0, 129.0], [10.1, 129.0], [10.2, 129.0], [10.3, 129.0], [10.4, 129.0], [10.5, 129.0], [10.6, 129.0], [10.7, 129.0], [10.8, 129.0], [10.9, 129.0], [11.0, 129.0], [11.1, 129.0], [11.2, 129.0], [11.3, 129.0], [11.4, 129.0], [11.5, 129.0], [11.6, 129.0], [11.7, 129.0], [11.8, 129.0], [11.9, 129.0], [12.0, 130.0], [12.1, 130.0], [12.2, 130.0], [12.3, 130.0], [12.4, 130.0], [12.5, 130.0], [12.6, 130.0], [12.7, 130.0], [12.8, 130.0], [12.9, 130.0], [13.0, 130.0], [13.1, 130.0], [13.2, 130.0], [13.3, 130.0], [13.4, 130.0], [13.5, 130.0], [13.6, 130.0], [13.7, 130.0], [13.8, 130.0], [13.9, 130.0], [14.0, 134.0], [14.1, 134.0], [14.2, 134.0], [14.3, 134.0], [14.4, 134.0], [14.5, 134.0], [14.6, 134.0], [14.7, 134.0], [14.8, 134.0], [14.9, 134.0], [15.0, 134.0], [15.1, 134.0], [15.2, 134.0], [15.3, 134.0], [15.4, 134.0], [15.5, 134.0], [15.6, 134.0], [15.7, 134.0], [15.8, 134.0], [15.9, 134.0], [16.0, 135.0], [16.1, 135.0], [16.2, 135.0], [16.3, 135.0], [16.4, 135.0], [16.5, 135.0], [16.6, 135.0], [16.7, 135.0], [16.8, 135.0], [16.9, 135.0], [17.0, 135.0], [17.1, 135.0], [17.2, 135.0], [17.3, 135.0], [17.4, 135.0], [17.5, 135.0], [17.6, 135.0], [17.7, 135.0], [17.8, 135.0], [17.9, 135.0], [18.0, 137.0], [18.1, 137.0], [18.2, 137.0], [18.3, 137.0], [18.4, 137.0], [18.5, 137.0], [18.6, 137.0], [18.7, 137.0], [18.8, 137.0], [18.9, 137.0], [19.0, 137.0], [19.1, 137.0], [19.2, 137.0], [19.3, 137.0], [19.4, 137.0], [19.5, 137.0], [19.6, 137.0], [19.7, 137.0], [19.8, 137.0], [19.9, 137.0], [20.0, 140.0], [20.1, 140.0], [20.2, 140.0], [20.3, 140.0], [20.4, 140.0], [20.5, 140.0], [20.6, 140.0], [20.7, 140.0], [20.8, 140.0], [20.9, 140.0], [21.0, 140.0], [21.1, 140.0], [21.2, 140.0], [21.3, 140.0], [21.4, 140.0], [21.5, 140.0], [21.6, 140.0], [21.7, 140.0], [21.8, 140.0], [21.9, 140.0], [22.0, 144.0], [22.1, 144.0], [22.2, 144.0], [22.3, 144.0], [22.4, 144.0], [22.5, 144.0], [22.6, 144.0], [22.7, 144.0], [22.8, 144.0], [22.9, 144.0], [23.0, 144.0], [23.1, 144.0], [23.2, 144.0], [23.3, 144.0], [23.4, 144.0], [23.5, 144.0], [23.6, 144.0], [23.7, 144.0], [23.8, 144.0], [23.9, 144.0], [24.0, 145.0], [24.1, 145.0], [24.2, 145.0], [24.3, 145.0], [24.4, 145.0], [24.5, 145.0], [24.6, 145.0], [24.7, 145.0], [24.8, 145.0], [24.9, 145.0], [25.0, 145.0], [25.1, 145.0], [25.2, 145.0], [25.3, 145.0], [25.4, 145.0], [25.5, 145.0], [25.6, 145.0], [25.7, 145.0], [25.8, 145.0], [25.9, 145.0], [26.0, 147.0], [26.1, 147.0], [26.2, 147.0], [26.3, 147.0], [26.4, 147.0], [26.5, 147.0], [26.6, 147.0], [26.7, 147.0], [26.8, 147.0], [26.9, 147.0], [27.0, 147.0], [27.1, 147.0], [27.2, 147.0], [27.3, 147.0], [27.4, 147.0], [27.5, 147.0], [27.6, 147.0], [27.7, 147.0], [27.8, 147.0], [27.9, 147.0], [28.0, 147.0], [28.1, 147.0], [28.2, 147.0], [28.3, 147.0], [28.4, 147.0], [28.5, 147.0], [28.6, 147.0], [28.7, 147.0], [28.8, 147.0], [28.9, 147.0], [29.0, 147.0], [29.1, 147.0], [29.2, 147.0], [29.3, 147.0], [29.4, 147.0], [29.5, 147.0], [29.6, 147.0], [29.7, 147.0], [29.8, 147.0], [29.9, 147.0], [30.0, 149.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 149.0], [31.0, 149.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 149.0], [31.5, 149.0], [31.6, 149.0], [31.7, 149.0], [31.8, 149.0], [31.9, 149.0], [32.0, 152.0], [32.1, 152.0], [32.2, 152.0], [32.3, 152.0], [32.4, 152.0], [32.5, 152.0], [32.6, 152.0], [32.7, 152.0], [32.8, 152.0], [32.9, 152.0], [33.0, 152.0], [33.1, 152.0], [33.2, 152.0], [33.3, 152.0], [33.4, 152.0], [33.5, 152.0], [33.6, 152.0], [33.7, 152.0], [33.8, 152.0], [33.9, 152.0], [34.0, 154.0], [34.1, 154.0], [34.2, 154.0], [34.3, 154.0], [34.4, 154.0], [34.5, 154.0], [34.6, 154.0], [34.7, 154.0], [34.8, 154.0], [34.9, 154.0], [35.0, 154.0], [35.1, 154.0], [35.2, 154.0], [35.3, 154.0], [35.4, 154.0], [35.5, 154.0], [35.6, 154.0], [35.7, 154.0], [35.8, 154.0], [35.9, 154.0], [36.0, 156.0], [36.1, 156.0], [36.2, 156.0], [36.3, 156.0], [36.4, 156.0], [36.5, 156.0], [36.6, 156.0], [36.7, 156.0], [36.8, 156.0], [36.9, 156.0], [37.0, 156.0], [37.1, 156.0], [37.2, 156.0], [37.3, 156.0], [37.4, 156.0], [37.5, 156.0], [37.6, 156.0], [37.7, 156.0], [37.8, 156.0], [37.9, 156.0], [38.0, 156.0], [38.1, 156.0], [38.2, 156.0], [38.3, 156.0], [38.4, 156.0], [38.5, 156.0], [38.6, 156.0], [38.7, 156.0], [38.8, 156.0], [38.9, 156.0], [39.0, 156.0], [39.1, 156.0], [39.2, 156.0], [39.3, 156.0], [39.4, 156.0], [39.5, 156.0], [39.6, 156.0], [39.7, 156.0], [39.8, 156.0], [39.9, 156.0], [40.0, 159.0], [40.1, 159.0], [40.2, 159.0], [40.3, 159.0], [40.4, 159.0], [40.5, 159.0], [40.6, 159.0], [40.7, 159.0], [40.8, 159.0], [40.9, 159.0], [41.0, 159.0], [41.1, 159.0], [41.2, 159.0], [41.3, 159.0], [41.4, 159.0], [41.5, 159.0], [41.6, 159.0], [41.7, 159.0], [41.8, 159.0], [41.9, 159.0], [42.0, 161.0], [42.1, 161.0], [42.2, 161.0], [42.3, 161.0], [42.4, 161.0], [42.5, 161.0], [42.6, 161.0], [42.7, 161.0], [42.8, 161.0], [42.9, 161.0], [43.0, 161.0], [43.1, 161.0], [43.2, 161.0], [43.3, 161.0], [43.4, 161.0], [43.5, 161.0], [43.6, 161.0], [43.7, 161.0], [43.8, 161.0], [43.9, 161.0], [44.0, 162.0], [44.1, 162.0], [44.2, 162.0], [44.3, 162.0], [44.4, 162.0], [44.5, 162.0], [44.6, 162.0], [44.7, 162.0], [44.8, 162.0], [44.9, 162.0], [45.0, 162.0], [45.1, 162.0], [45.2, 162.0], [45.3, 162.0], [45.4, 162.0], [45.5, 162.0], [45.6, 162.0], [45.7, 162.0], [45.8, 162.0], [45.9, 162.0], [46.0, 164.0], [46.1, 164.0], [46.2, 164.0], [46.3, 164.0], [46.4, 164.0], [46.5, 164.0], [46.6, 164.0], [46.7, 164.0], [46.8, 164.0], [46.9, 164.0], [47.0, 164.0], [47.1, 164.0], [47.2, 164.0], [47.3, 164.0], [47.4, 164.0], [47.5, 164.0], [47.6, 164.0], [47.7, 164.0], [47.8, 164.0], [47.9, 164.0], [48.0, 170.0], [48.1, 170.0], [48.2, 170.0], [48.3, 170.0], [48.4, 170.0], [48.5, 170.0], [48.6, 170.0], [48.7, 170.0], [48.8, 170.0], [48.9, 170.0], [49.0, 170.0], [49.1, 170.0], [49.2, 170.0], [49.3, 170.0], [49.4, 170.0], [49.5, 170.0], [49.6, 170.0], [49.7, 170.0], [49.8, 170.0], [49.9, 170.0], [50.0, 171.0], [50.1, 171.0], [50.2, 171.0], [50.3, 171.0], [50.4, 171.0], [50.5, 171.0], [50.6, 171.0], [50.7, 171.0], [50.8, 171.0], [50.9, 171.0], [51.0, 171.0], [51.1, 171.0], [51.2, 171.0], [51.3, 171.0], [51.4, 171.0], [51.5, 171.0], [51.6, 171.0], [51.7, 171.0], [51.8, 171.0], [51.9, 171.0], [52.0, 176.0], [52.1, 176.0], [52.2, 176.0], [52.3, 176.0], [52.4, 176.0], [52.5, 176.0], [52.6, 176.0], [52.7, 176.0], [52.8, 176.0], [52.9, 176.0], [53.0, 176.0], [53.1, 176.0], [53.2, 176.0], [53.3, 176.0], [53.4, 176.0], [53.5, 176.0], [53.6, 176.0], [53.7, 176.0], [53.8, 176.0], [53.9, 176.0], [54.0, 180.0], [54.1, 180.0], [54.2, 180.0], [54.3, 180.0], [54.4, 180.0], [54.5, 180.0], [54.6, 180.0], [54.7, 180.0], [54.8, 180.0], [54.9, 180.0], [55.0, 180.0], [55.1, 180.0], [55.2, 180.0], [55.3, 180.0], [55.4, 180.0], [55.5, 180.0], [55.6, 180.0], [55.7, 180.0], [55.8, 180.0], [55.9, 180.0], [56.0, 191.0], [56.1, 191.0], [56.2, 191.0], [56.3, 191.0], [56.4, 191.0], [56.5, 191.0], [56.6, 191.0], [56.7, 191.0], [56.8, 191.0], [56.9, 191.0], [57.0, 191.0], [57.1, 191.0], [57.2, 191.0], [57.3, 191.0], [57.4, 191.0], [57.5, 191.0], [57.6, 191.0], [57.7, 191.0], [57.8, 191.0], [57.9, 191.0], [58.0, 211.0], [58.1, 211.0], [58.2, 211.0], [58.3, 211.0], [58.4, 211.0], [58.5, 211.0], [58.6, 211.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 211.0], [59.2, 211.0], [59.3, 211.0], [59.4, 211.0], [59.5, 211.0], [59.6, 211.0], [59.7, 211.0], [59.8, 211.0], [59.9, 211.0], [60.0, 211.0], [60.1, 211.0], [60.2, 211.0], [60.3, 211.0], [60.4, 211.0], [60.5, 211.0], [60.6, 211.0], [60.7, 211.0], [60.8, 211.0], [60.9, 211.0], [61.0, 211.0], [61.1, 211.0], [61.2, 211.0], [61.3, 211.0], [61.4, 211.0], [61.5, 211.0], [61.6, 211.0], [61.7, 211.0], [61.8, 211.0], [61.9, 211.0], [62.0, 212.0], [62.1, 212.0], [62.2, 212.0], [62.3, 212.0], [62.4, 212.0], [62.5, 212.0], [62.6, 212.0], [62.7, 212.0], [62.8, 212.0], [62.9, 212.0], [63.0, 212.0], [63.1, 212.0], [63.2, 212.0], [63.3, 212.0], [63.4, 212.0], [63.5, 212.0], [63.6, 212.0], [63.7, 212.0], [63.8, 212.0], [63.9, 212.0], [64.0, 252.0], [64.1, 252.0], [64.2, 252.0], [64.3, 252.0], [64.4, 252.0], [64.5, 252.0], [64.6, 252.0], [64.7, 252.0], [64.8, 252.0], [64.9, 252.0], [65.0, 252.0], [65.1, 252.0], [65.2, 252.0], [65.3, 252.0], [65.4, 252.0], [65.5, 252.0], [65.6, 252.0], [65.7, 252.0], [65.8, 252.0], [65.9, 252.0], [66.0, 265.0], [66.1, 265.0], [66.2, 265.0], [66.3, 265.0], [66.4, 265.0], [66.5, 265.0], [66.6, 265.0], [66.7, 265.0], [66.8, 265.0], [66.9, 265.0], [67.0, 265.0], [67.1, 265.0], [67.2, 265.0], [67.3, 265.0], [67.4, 265.0], [67.5, 265.0], [67.6, 265.0], [67.7, 265.0], [67.8, 265.0], [67.9, 265.0], [68.0, 273.0], [68.1, 273.0], [68.2, 273.0], [68.3, 273.0], [68.4, 273.0], [68.5, 273.0], [68.6, 273.0], [68.7, 273.0], [68.8, 273.0], [68.9, 273.0], [69.0, 273.0], [69.1, 273.0], [69.2, 273.0], [69.3, 273.0], [69.4, 273.0], [69.5, 273.0], [69.6, 273.0], [69.7, 273.0], [69.8, 273.0], [69.9, 273.0], [70.0, 307.0], [70.1, 307.0], [70.2, 307.0], [70.3, 307.0], [70.4, 307.0], [70.5, 307.0], [70.6, 307.0], [70.7, 307.0], [70.8, 307.0], [70.9, 307.0], [71.0, 307.0], [71.1, 307.0], [71.2, 307.0], [71.3, 307.0], [71.4, 307.0], [71.5, 307.0], [71.6, 307.0], [71.7, 307.0], [71.8, 307.0], [71.9, 307.0], [72.0, 312.0], [72.1, 312.0], [72.2, 312.0], [72.3, 312.0], [72.4, 312.0], [72.5, 312.0], [72.6, 312.0], [72.7, 312.0], [72.8, 312.0], [72.9, 312.0], [73.0, 312.0], [73.1, 312.0], [73.2, 312.0], [73.3, 312.0], [73.4, 312.0], [73.5, 312.0], [73.6, 312.0], [73.7, 312.0], [73.8, 312.0], [73.9, 312.0], [74.0, 313.0], [74.1, 313.0], [74.2, 313.0], [74.3, 313.0], [74.4, 313.0], [74.5, 313.0], [74.6, 313.0], [74.7, 313.0], [74.8, 313.0], [74.9, 313.0], [75.0, 313.0], [75.1, 313.0], [75.2, 313.0], [75.3, 313.0], [75.4, 313.0], [75.5, 313.0], [75.6, 313.0], [75.7, 313.0], [75.8, 313.0], [75.9, 313.0], [76.0, 326.0], [76.1, 326.0], [76.2, 326.0], [76.3, 326.0], [76.4, 326.0], [76.5, 326.0], [76.6, 326.0], [76.7, 326.0], [76.8, 326.0], [76.9, 326.0], [77.0, 326.0], [77.1, 326.0], [77.2, 326.0], [77.3, 326.0], [77.4, 326.0], [77.5, 326.0], [77.6, 326.0], [77.7, 326.0], [77.8, 326.0], [77.9, 326.0], [78.0, 334.0], [78.1, 334.0], [78.2, 334.0], [78.3, 334.0], [78.4, 334.0], [78.5, 334.0], [78.6, 334.0], [78.7, 334.0], [78.8, 334.0], [78.9, 334.0], [79.0, 334.0], [79.1, 334.0], [79.2, 334.0], [79.3, 334.0], [79.4, 334.0], [79.5, 334.0], [79.6, 334.0], [79.7, 334.0], [79.8, 334.0], [79.9, 334.0], [80.0, 360.0], [80.1, 360.0], [80.2, 360.0], [80.3, 360.0], [80.4, 360.0], [80.5, 360.0], [80.6, 360.0], [80.7, 360.0], [80.8, 360.0], [80.9, 360.0], [81.0, 360.0], [81.1, 360.0], [81.2, 360.0], [81.3, 360.0], [81.4, 360.0], [81.5, 360.0], [81.6, 360.0], [81.7, 360.0], [81.8, 360.0], [81.9, 360.0], [82.0, 392.0], [82.1, 392.0], [82.2, 392.0], [82.3, 392.0], [82.4, 392.0], [82.5, 392.0], [82.6, 392.0], [82.7, 392.0], [82.8, 392.0], [82.9, 392.0], [83.0, 392.0], [83.1, 392.0], [83.2, 392.0], [83.3, 392.0], [83.4, 392.0], [83.5, 392.0], [83.6, 392.0], [83.7, 392.0], [83.8, 392.0], [83.9, 392.0], [84.0, 506.0], [84.1, 506.0], [84.2, 506.0], [84.3, 506.0], [84.4, 506.0], [84.5, 506.0], [84.6, 506.0], [84.7, 506.0], [84.8, 506.0], [84.9, 506.0], [85.0, 506.0], [85.1, 506.0], [85.2, 506.0], [85.3, 506.0], [85.4, 506.0], [85.5, 506.0], [85.6, 506.0], [85.7, 506.0], [85.8, 506.0], [85.9, 506.0], [86.0, 536.0], [86.1, 536.0], [86.2, 536.0], [86.3, 536.0], [86.4, 536.0], [86.5, 536.0], [86.6, 536.0], [86.7, 536.0], [86.8, 536.0], [86.9, 536.0], [87.0, 536.0], [87.1, 536.0], [87.2, 536.0], [87.3, 536.0], [87.4, 536.0], [87.5, 536.0], [87.6, 536.0], [87.7, 536.0], [87.8, 536.0], [87.9, 536.0], [88.0, 637.0], [88.1, 637.0], [88.2, 637.0], [88.3, 637.0], [88.4, 637.0], [88.5, 637.0], [88.6, 637.0], [88.7, 637.0], [88.8, 637.0], [88.9, 637.0], [89.0, 637.0], [89.1, 637.0], [89.2, 637.0], [89.3, 637.0], [89.4, 637.0], [89.5, 637.0], [89.6, 637.0], [89.7, 637.0], [89.8, 637.0], [89.9, 637.0], [90.0, 687.0], [90.1, 687.0], [90.2, 687.0], [90.3, 687.0], [90.4, 687.0], [90.5, 687.0], [90.6, 687.0], [90.7, 687.0], [90.8, 687.0], [90.9, 687.0], [91.0, 687.0], [91.1, 687.0], [91.2, 687.0], [91.3, 687.0], [91.4, 687.0], [91.5, 687.0], [91.6, 687.0], [91.7, 687.0], [91.8, 687.0], [91.9, 687.0], [92.0, 798.0], [92.1, 798.0], [92.2, 798.0], [92.3, 798.0], [92.4, 798.0], [92.5, 798.0], [92.6, 798.0], [92.7, 798.0], [92.8, 798.0], [92.9, 798.0], [93.0, 798.0], [93.1, 798.0], [93.2, 798.0], [93.3, 798.0], [93.4, 798.0], [93.5, 798.0], [93.6, 798.0], [93.7, 798.0], [93.8, 798.0], [93.9, 798.0], [94.0, 923.0], [94.1, 923.0], [94.2, 923.0], [94.3, 923.0], [94.4, 923.0], [94.5, 923.0], [94.6, 923.0], [94.7, 923.0], [94.8, 923.0], [94.9, 923.0], [95.0, 923.0], [95.1, 923.0], [95.2, 923.0], [95.3, 923.0], [95.4, 923.0], [95.5, 923.0], [95.6, 923.0], [95.7, 923.0], [95.8, 923.0], [95.9, 923.0], [96.0, 965.0], [96.1, 965.0], [96.2, 965.0], [96.3, 965.0], [96.4, 965.0], [96.5, 965.0], [96.6, 965.0], [96.7, 965.0], [96.8, 965.0], [96.9, 965.0], [97.0, 965.0], [97.1, 965.0], [97.2, 965.0], [97.3, 965.0], [97.4, 965.0], [97.5, 965.0], [97.6, 965.0], [97.7, 965.0], [97.8, 965.0], [97.9, 965.0], [98.0, 2332.0], [98.1, 2332.0], [98.2, 2332.0], [98.3, 2332.0], [98.4, 2332.0], [98.5, 2332.0], [98.6, 2332.0], [98.7, 2332.0], [98.8, 2332.0], [98.9, 2332.0], [99.0, 2332.0], [99.1, 2332.0], [99.2, 2332.0], [99.3, 2332.0], [99.4, 2332.0], [99.5, 2332.0], [99.6, 2332.0], [99.7, 2332.0], [99.8, 2332.0], [99.9, 2332.0]], "isOverall": false, "label": "GET Books", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 29.0, "series": [{"data": [[2300.0, 1.0], [300.0, 7.0], [600.0, 2.0], [700.0, 1.0], [200.0, 6.0], [100.0, 29.0], [900.0, 2.0], [500.0, 2.0]], "isOverall": false, "label": "GET Books", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 42.0, "series": [{"data": [[0.0, 42.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0200000000000005, "minX": 1.75033554E12, "maxY": 3.0200000000000005, "series": [{"data": [[1.75033554E12, 3.0200000000000005]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75033554E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 251.43750000000003, "minX": 1.0, "maxY": 378.09523809523813, "series": [{"data": [[2.0, 259.81818181818176], [4.0, 251.43750000000003], [1.0, 319.5], [3.0, 378.09523809523813]], "isOverall": false, "label": "GET Books", "isController": false}, {"data": [[3.0200000000000005, 309.20000000000005]], "isOverall": false, "label": "GET Books-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 115.83333333333333, "minX": 1.75033554E12, "maxY": 79352.56666666667, "series": [{"data": [[1.75033554E12, 79352.56666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75033554E12, 115.83333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75033554E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 309.20000000000005, "minX": 1.75033554E12, "maxY": 309.20000000000005, "series": [{"data": [[1.75033554E12, 309.20000000000005]], "isOverall": false, "label": "GET Books", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75033554E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 193.3999999999999, "minX": 1.75033554E12, "maxY": 193.3999999999999, "series": [{"data": [[1.75033554E12, 193.3999999999999]], "isOverall": false, "label": "GET Books", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75033554E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 53.78000000000003, "minX": 1.75033554E12, "maxY": 53.78000000000003, "series": [{"data": [[1.75033554E12, 53.78000000000003]], "isOverall": false, "label": "GET Books", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75033554E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 120.0, "minX": 1.75033554E12, "maxY": 2332.0, "series": [{"data": [[1.75033554E12, 2332.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75033554E12, 120.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75033554E12, 681.9999999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75033554E12, 2332.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75033554E12, 170.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75033554E12, 941.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75033554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 150.5, "minX": 1.0, "maxY": 326.0, "series": [{"data": [[16.0, 167.5], [8.0, 150.5], [1.0, 326.0], [9.0, 212.0], [3.0, 273.0], [13.0, 156.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 114.0, "minX": 1.0, "maxY": 146.0, "series": [{"data": [[16.0, 135.0], [8.0, 114.0], [1.0, 118.0], [9.0, 146.0], [3.0, 145.0], [13.0, 126.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75033554E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75033554E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75033554E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75033554E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75033554E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75033554E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75033554E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75033554E12, 0.8333333333333334]], "isOverall": false, "label": "GET Books-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75033554E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.75033554E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.75033554E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75033554E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

