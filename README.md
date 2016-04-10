# iConnect

## Software platform used
    Meteor, Cordova and MongoDB

## User flows
    > A user enters the Web App.
    > He/She is shown the Live Stream of Newsfeed as well as Live Broadcasts.
    > In Live Broadcast, user can create a broadcast to reach large masses.
    > Live Broadcast can also be used by authorities for Self Defence Training and Immediate Health Aid techniques.
    > When user clicks on "View On Map", he/she is shown all the alerts that are within 5 mile radius of that user.
    > If user wants to report an event/crime, he/she can add the event and same will reflect live on the newsfeed as well as map.
    > User can choose to broadcast the present situation to the concerned SOS authorities.
    > There is an SOS button, which user can press to alert all his/her emergency contacts as well as concerned authorities.
    > There is also an Admin Panel, which shows Real Time updates to concerned authorities so as to act on them soon as they get information.
    > This app can be used as a Web App as well as Android app.

## Next level of API designs
    > We plan to extend Broadcast API. It currently connects user streams(video/audio) using unique sessions. In case of Broadcast, each peer may act as a relay which  helps in stability.
    > We also plan to extend this in case of Natural Disasters by creating heat maps.
    > We plan to track SOS being provided in real time.
    > We can provide analytics for crime events, based on Male/Female, locations and type of events and time of day.

## Project Structure

* /client - Contains all the client side code.
    * /lib - Vendor files are contained in this folder
    * /templates - Contains all Client Side templates - HTML, CSS and JS
* /lib - Contains all the Routing, Collections and Publications
* /packages - Contains all the reusable contents of the app
* /server - Contains all the server side code and configurations