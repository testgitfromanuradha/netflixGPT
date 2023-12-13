 # Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- code push into github
- Login Form
- Sign Up Form ---> firebase
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create Sign Up user account
- Implement Sign In user api
- Created Redux Store with userSlice
- Implemented sign out Features
- Update profile api call
- fetch movies from TMDB api call
- BugFix: Sign up user displayName and profile picture Update
- BugFix: if the user is not lagged in  redirect /browse to Login Page and vice-versa
- unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- register TMDB API & Create an app & get access token
- Get data from TMDB now Playing movies list API
- Custom Hook for Now playing movies 
- create movieSlice
- Update store with movies Date
- Planning for MainContainer & secondaryContainer
- fetch data for Tailer Video
- Update store with Tailer Video data
- Embedded the YouTube Video and make it autoplay and mute 
- Tailwind classes to make main Container look awesome
- Build secondary component
- Build Movie list 
- Build Movie Card 
- TMDB Image CDN URL 
- Made the Browse Page  amazing with TailwindCSS
- usePopularMovies Custom Hook
- GPT search Page
- GPT Search Bar
- (BONUS) Multi-language Features in our App
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features
- Login/Sign Up
   - Sign In / Sign Up Form
   - redirect to Browse Page
- Browse (after authentication)
   - Header 
   - Main Movie
      - Tailer in Background
      - Title & Description
      - MovieSuggestions
        - MovieLists * N
- Netflix
   - Search Bar
   - Movie Suggestions     


# Formik is very good library
 **Take TMDB api's for fetching Movie data

# Steps for deployment:
1.1st run command 'npm install firebase'
2. install firebase CLI- 'npm install -g firebase-tools'
3. Initilize Firebase - 'firebase init', then select Hosting
4. Deploy command - 'firebase deploy'.

# Project Setup
Before starting the project please add .env file and add TMDB and OPENAI KEY into it.