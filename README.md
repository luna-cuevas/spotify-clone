Hey, I made this project with the intent of learning new tech. In particular, I was curious to learn how to use TailwindCSS and I'm also continuing my studies on Next.js and NextAuth. 

The goal of this project was to create a spotify clone and use the Spotify API to remotely control the app. To do this I would need to create a login screen/button to validate a user's id and authentication token and then communicate with the Spotify API. Once the user's token is validated, they will be forwarded to the main screen for the app. 

The main screen uses Tailwind classes to give a pretty close representation of the Spotify app. The power of Tailwind is that instead of manually setting media breakpoints, you only need to set classes like "sm:space-x-3" which translates to "on small screens, set padding to 3 pixels." Additionally, I found that the time I would normally spend on styling could be used to make the app better. 

Challenges I currently am working through is getting the prev/next buttons to function correctly. It seems like the node wrapper I used for the Spotify API needs to be updated and the next() and prev() functions don't work as intended. I looked up the issue and it seems that their team is working on it. Instead of scrapping this project, I'm spending time reading through the Spotify API docs to see if I can just make that call myself. 

Next steps on this are to integrate an audio visualizer using P5, a javascript library that converts audio into points on a graph. P5 also allows for more visual control meaning there is potential to make the visualizer interactive. 

You can see a live demo here: https://spotify-clone-luna-cuevas.vercel.app/login 
