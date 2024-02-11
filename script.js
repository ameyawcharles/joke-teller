const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// // Disable/Enable Button
// function toggleButton() {
//   button.disabled = !button.disabled;
// }


// Disabled/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}


// test();

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    console.log('tell me:', joke);
    VoiceRSS.speech({
        key: '21bc7f217d8f4a979e6a2ce42b38fbb4', 
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    try {
    const response = await fetch(apiUrl);
    const data = await response.json(); 
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        // Text-to-Speech
        tellMe(joke);
        // Disabled Button
        toggleButton();
        } catch (error) {
            // Catch Error Here
        console.log('Whoops', error);
    } 
}

//Event Listeners 
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);


// // Get jokes from Joke API
// async function getJokes() {
//     let joke = '';
//     const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       // Assign One or Two Part Joke
//       if (data.setup) {
//         joke = `${data.setup} ... ${data.delivery}`;
//       } else {
//         joke = data.joke;
//       }
//       // Passing Joke to VoiceRSS API
//       tellMe(joke);
//       // Disable Button
//       toggleButton();
//     } catch (error) {
//       // Catch Error Here
//     }
//   }
  
//   // Event Listeners
//   button.addEventListener('click', getJokes);
//   audioElement.addEventListener('ended', toggleButton);