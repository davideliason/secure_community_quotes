# Secure Community Quotes
## 9/29/2018
### [David Eliason](http://www.davethemaker.com)

## Intro

This is a skill-progression from [community quotes](https://github.com/davideliason/community_quotes), adding on cookies, sessions, passport for user login and authentication.

Woot!

## Functionality

## Technical
I started out by creating a base express server and a project subfolder 'client' which held the CRA. On the server side, created the API server wherein data served in JSON format and also a wildcare route wherein all other routes other than that API request would serve the react static page. That's a good thing, because we want all the heavy lifting to be doine on the react side; within that CRA, we'll still do some fetch calls, such as CRUD functionality, so a little later on we'll be building out some more routes within express. But for now, those two routes are enough.

I used the 'session-file=store' module to create a local store instance file wherein the session data is saved. This is a baby-step for moving from cookie storage which will evaporate once the session is done. 


## Modules Used
express   : server
path : file paths connectivity
favicon : that neat pic on browser
logger : useful data per processes
body-parser : to get form inputted data from browser
mongodb : our db
dotenv : hidden environmental variables
uuid : module to get unique strings
session-file-store: used to create a store for session data persistence by using a local file for capturing session object key-values
passport & passport-local : authentication

