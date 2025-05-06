type track = [string, string];

function playlistDuration(playlist: readonly track []): string {
  const times = playlist.map(([name, time]) => time);
  let hoursRes = 0;
  let minutesRes = 0;
  let secondsRes = 0;
  for (let time of times) {
    if (time.split(':').length === 3) {
      const [hours, minute, seconds] = time.split(':');
      //   console.log({hours, minute, seconds}, '📒')
      hoursRes += Number(hours);
      minutesRes += Number(minute);
      secondsRes += Number(seconds);
    }
    if (time.split(':').length === 2) {
      const [minute, seconds] = time.split(':');
      //   console.log({minute, seconds}, '📕')
      minutesRes += Number(minute);
      secondsRes += Number(seconds);
    }
  }

  //   if(minutesRes >= 60) {

  //   }
  if (secondsRes >= 60) {
    console.log({ hoursRes, minutesRes, secondsRes });
    const restSeconds = secondsRes % 60;
    const minutes = Math.floor(secondsRes / 60);
    minutesRes += minutes;
    secondsRes = restSeconds;
    console.log(restSeconds);
  }
  if (minutesRes >= 60) {
    hoursRes += Math.floor(minutesRes / 60);
    const restMinutes = minutesRes % 60;
    minutesRes = restMinutes;
  }
  return hoursRes < 1
    ? `${minutesRes.toString().padStart(2, '0')}:${secondsRes.toString().padStart(2, '0')}`
    : `${String(hoursRes).padStart(2, '0')}:${String(minutesRes).padStart(2,'0')}:${String(secondsRes).padStart(2, '0')}`;
//   console.log({ hoursRes, minutesRes, secondsRes }, '🔏');
}

const innuendo: track[] = [
  ['Innuendo', '6:31'],
  ["I'm Going Slightly Mad", '4:22'],
  ['Headlong', '4:38'],
  ["I Can't Live with You", '4:33'],
  ["Don't Try So Hard", '3:39'],
  ['Ride the Wild Wind', '4:42'],
  ["All God's People", '4:21'],
  ['These Are the Days of Our Lives', '4:15'],
  ['Delilah', '3:35'],
  ['The Hitman', '4:56'],
  ['Bijou', '3:36'],
  ['The Show Must Go On', '4:35'],
];

console.log(playlistDuration(innuendo)); // "53:43"

const blackMirrorSeason4: track[] = [
  ['USS Callister', '01:16:00'],
  ['Arkangel', '52:00'],
  ['Crocodile', '59:00'],
  ['Hang the DJ', '51:00'],
  ['Metalhead', '41:00'],
  ['Black Museum', '01:09:00'],
];

console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"

const blackMirrorSeason5: track[] = [
  ['USS Callister', '01:16:15'],
  ['Arkangel', '52:00'],
  ['Crocodile', '59:00'],
  ['Hang the DJ', '51:00'],
  ['Metalhead', '41:00'],
  ['Black Museum', '01:09:54'],
];

console.log(playlistDuration(blackMirrorSeason5)); // "05:48:00"

//Временные величины не округляют «к ближайшей минуте» — они разбиваются
// на целые минуты и оставшиеся секунды. Math.round(secondsRes/60) будет
// «справедливо» округлять, скажем, 30 секунд до 1 минуты, но по-человечески
// 30 секунд — это 0 полных минут и 30 секунд, а не 1 минута 30 секунд.

// function playlistDuration(playlist) {
//   const oneMinute = 60;
//   const oneHour = 60;

//   let countHours = 0;
//   let countMinute = 0;
//   let countSeconds = 0;
//   const arrTimeSound = playlist.map((soudn) => soudn[1]);
//   for (const timeTrack of arrTimeSound) {
//     const arrTime = timeTrack.split(':');
//     if (arrTime.length === 2) {
//       countMinute += Number(arrTime[0]);
//       countSeconds += Number(arrTime[1]);
//     }
//     if (arrTime.length === 3) {
//       countHours += Number(arrTime[0]);
//       countMinute += Number(arrTime[1]);
//       countSeconds += Number(arrTime[2]);
//     }
//   }

//   const deviderSec = Math.floor(countSeconds / 60);
//   const restSec = countSeconds - deviderSec * 60;
//   const commonMinutes = countMinute + deviderSec;
//   if (commonMinutes < 60) {
//     const playlistTime = `${
//       commonMinutes.toString().length < 2
//         ? `${'0' + commonMinutes.toString()}`
//         : commonMinutes
//     }:${restSec.toString().length < 2 ? '0' + restSec.toString() : restSec}`;
//     return playlistTime;
//   } else {
//     const deviderMinutes = Math.floor(commonMinutes / 60);
//     const restMinutes = commonMinutes - deviderMinutes * 60;
//     const commonHours = countHours + deviderMinutes;
//     const deviderSec = Math.floor(countSeconds / 60);
//     const restSec = countSeconds - deviderSec * 60;
//     return `${
//       commonHours.toString().length < 2
//         ? `${'0' + commonHours.toString()}`
//         : commonHours
//     }:${
//       restMinutes.toString().length < 2
//         ? `${'0' + restMinutes.toString()}`
//         : restMinutes
//     }:${
//       restSec.toString().length < 2 ? `${'0' + restSec.toString()}` : restSec
//     }`;
//   }

//   console.log(countMinute, countSeconds, deviderSec, restSec);
// }
