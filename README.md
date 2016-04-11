# iConnect

## Project Description

Link to Google Slides Presentation - 
https://docs.google.com/presentation/d/11idG6D5QvYInQcYoDa5E9CRCB5b_i05O_E-cICluJ00/edit?usp=sharing


iConnect, a Social Reporting App, provides an easy-to-use yet powerful way to report crimes in REAL-TIME by the citizens.

The app has many interactive features like Pinning on Google Maps, Emergency Video Broadcast by local authorities, and one-to-one Video Chat with concerned authorities for quick resolution or crime reporting. These video snippets can be used as video evidences in case of crime reporting.

## Objective 

To connect people in distress, in case of emergency and enable people nearby to help those in need. Also, we enable social services like police and medical services to reach those in need in real time. Also education lectures can be given through broadcast.

The app can be divided into various modules :

1. Login Form - Create a new user using Twitter + Facebook integration. Also takes in Mobile Number for verification of user.

2. Home Page with Live Feed and SOS - This page shows all the nearby happenings like Robbery in a nearby bank. Helps the local citizens to stay alert. Each post in the local feed has the address of the event in it.

    There is also an SOS Button which can be used in emergency situations. It can be used to post an emergency tweet with     #iConnect #emergency, along with location co-ordinates of the user.

3. Broadcast Mode - Broadcast mode is designed for officials to provide localized information to the crowd in case of High Alerts and other emergency. It uses P2P technology(WebRTC) for high scalability.

    This broadcast system can also be used for education purposes where Police can take Self Defense classes and immediate     health aid techniques. 

4. Map - Shows all the nearby occurrences on Google Maps along with the description of the event and the user who posted it. Has a Button to add new event, which gives options for the type of crime/emergency so that concerned authority can be called.

There is an Admin Panel to monitor all the events. This can be used by authorities to take action and resolve issues in real time.

This module also has a “Broadcast to Emergency Centers” checkbox in case of emergency. For example, a person witnessing an armed robbery can secretly shoot a live videos to assist the authorities and for video evidence.

While reporting an event, the user can also choose to provide a live video feed from a Phone(Android and iOS app/Web App) and Desktop and it is streamed to the concerned officials.

## Software platform used
    Meteor, Cordova and MongoDB

## Project Structure

* /client - Contains all the client side code.
    * /lib - Vendor files are contained in this folder.
    * /templates - Contains all Client Side templates - HTML, CSS and JS.
* /lib - Contains all the Routing, Collections and Publications.
* /packages - Contains all the reusable contents of the app.
* /server - Contains all the server side code and configurations.

## User flows
* A user enters the Web App.
* He/She is shown the Live Stream of Newsfeed as well as Live Broadcasts.
* In Live Broadcast, user can create a broadcast to reach large masses.
* Live Broadcast can also be used by authorities for Self Defence Training and Immediate Health Aid techniques.
* When user clicks on "View On Map", he/she is shown all the alerts that are within 5 mile radius of that user.
* If user wants to report an event/crime, he/she can add the event and same will reflect live on the newsfeed as well as map.
* User can choose to broadcast the present situation to the concerned SOS authorities.
* There is an SOS button, which user can press to alert all his/her emergency contacts as well as concerned authorities.
* There is also an Admin Panel, which shows Real Time updates to concerned authorities so as to act on them soon as they get information.
* This app can be used as a Web App as well as Android app.

## How to run?

To run the project:

* Download the Zip file and extract it.
* Change directory to the extracted folder and run `$ meteor` command.
* It will create a local server and you can view app at `localhost:3000`, 3000 being default port.

The app has been ported on Android as well as iOS using Cordova plugins.

## Next level of API designs
* We plan to extend Broadcast API. It currently connects user streams(video/audio) using unique sessions. In case of Broadcast, each peer may act as a relay which  helps in stability.
* We also plan to extend this in case of Natural Disasters by creating heat maps.
* We plan to track SOS being provided in real time.
* We can provide analytics for crime events, based on Male/Female, locations and type of events and time of day.
