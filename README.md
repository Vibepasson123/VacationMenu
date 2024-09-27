# Vacation Menu

## Description
This is a React Native project built as part of a technical assessment for a Senior React Native Developer position. The goal of the project was to analyze the provided API and explore how many features could be built using a small dataset, focusing on creating a user-friendly and interactive experience.

I thoroughly enjoyed working on this task, despite the challenge of using my "slow computer" (my little tortoise). I aimed to cover as much as possible within the given time, but there are still a few areas I'd love to explore further to improve both the code and the features.

For now, here’s what I’ve completed. Let’s see how we can run this project on your computer so you can experience it firsthand. Ready? Let’s go!

---

## Table of Contents

- [Vacation Menu](#vacation-menu)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [1. Clone the repository](#1-clone-the-repository)
    - [How to Run the Project on iOS/Mac](#how-to-run-the-project-on-iosmac)
    - [App Description](#app-description)
    - [Hotel List](#hotel-list)
    - [Auto Suggeset](#auto-suggeset)
    - [Search Screen:-](#search-screen-)
    - [favrouit Screen :-](#favrouit-screen--)
    - [](#)
    - [](#-1)
    - [Scope and future works :-](#scope-and-future-works--)

---

## Requirements

Before you get started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) >= 14.x.x
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) >= 6.x.x
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Xcode (for iOS development)
- Android Studio (for Android development)

---

## Installation

To install and set up the project on your local machine, follow these steps:

### 1. Clone the repository

```bash

git clone https://github.com/Vibepasson123/VacationMenu.git

cd VacationMenu
```
### How to Run the Project on iOS/Mac

Onnce you are in the project folder install the node dependencies with the following command 
```bash 
 npm install or  yarn install 
```
After all the packages have been installed, for macOS, you will need to install the iOS dependencies using CocoaPods. Run the following command:

 ```bash
  cd ios && pod install
  ````
 Once the dependencies are installed, you're ready to run the project. You can use the following commands to launch the app: 
 
 ```bash
   yarn ios or yarn android 
   ```
 
 To run with Npm we can have these commands

 ```bash
 npx pod-install ios 
    
 npx react-native run-ios
      
 npx react-native run-android
```
 To run and build on Android, we need to ensure that you have the following configuration file: local.properties, and that it is correctly configured.

The process will start with running some unit tests during the build phase, after which you will see the application started and running.z

It will start with running some unit tests at build phase and the you are going to see the application staareted and running.



### App Description 
  this app has threemain section there main section.
  ### Hotel List 
   This is the home screen or landing screen. On this screen, we have a header with search queries and options for sorting the dataset.
   ### Auto Suggeset 
  At the top of the homepage, there is a search bar where users can search using different keys in the dataset, such as location or name, filtering the results accordingly. There is also an icon on the right side that opens a modal window, allowing users to apply multiple sorting options

### Search Screen:- 
This is the second screen, where users can perform more advanced searches by combining multiple fields to find hotels.

### favrouit Screen :-
the last tab scrren is t he favrout screen, where all the favroute hotel we se and catch up data.

###
The last tab is the Favorites screen, where users can view all their favorite hotels and access cached data.


### 
Hotel Detais page where you case the deatils of the hosipat in more details 

thats a bit sunnary about he project 


### Scope and future works :-
- The code needs further cleanup and organization.
- A better architecture needs to be applied for scalability.
- Some parts of the architecture need to be redesigned.
- Google Maps integration is needed to check real-time opening times, distance, and synchronization.
- The authentication system needs to be implemented. There are a few more things we can discuss in the meeting.

