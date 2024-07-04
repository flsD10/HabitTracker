var MYLIBRARY = MYLIBRARY || (function(){
    let times = {};
    return {
        pushToDict: function(taskName) {
            function reformat(timeDictionary){// reformats time dictionary into two separate arrays
                newDict = {};
                let labels = [];
                let data = [];
                for (let taskName in timeDictionary){
                    labels.push(taskName)
                    newDict[taskName] = 0;
                    for (let a =0; a < (timeDictionary[taskName].length); a+=2){
                        newDict[taskName] += timeDictionary[taskName][a+1] - timeDictionary[taskName][a];
                    };
                    data.push(newDict[taskName]);
                };
                return [labels, data];}
            const currentDate = new Date();
            const timeInSeconds = (currentDate.getHours() * 60 * 60) + (currentDate.getMinutes() * 60) + (currentDate.getSeconds());
            if (times[taskName] === undefined){ // no previous entries
                times[taskName] = [];
                times[taskName].push(timeInSeconds);
                return undefined;
            }else if (times[taskName].length % 2 ===1){ //if it gonna be even
                times[taskName].push(timeInSeconds);
                return reformat(times);
            }else{ //just add to array
                times[taskName].push(timeInSeconds);
                return undefined;
            }
        }
    };
}());
