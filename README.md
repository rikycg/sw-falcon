# SwFalcon

## Overview
This project is part of my portfolio of exercises. Here, I used the [Star Wars REST API](https://swapi.dev/) to fetch information. The project consists of an NX monorepo, with an Angular app and a JavaScript library.

The library helps in querying information, attempting to utilize SOLID principles, and striving to be as agnostic as possible so that in the future the same app can be created in Vue and React.

Undoubtedly, this could be achieved using a generic class, as what varies in the API is the structure of each entity. This could have been easily solved with a class that queries the information, to which we could pass a mapper, DTO, etc.

However, I wanted to practice SOLID principles in this exercise, in addition to the fact that scalability is much better maintained with a clean architecture. In the future, behaviors and structures might change, and a generic base might present some challenges.

Not to forget, the creation of Unit Tests is much more practical in this manner.

This exercise still has some opportunities for improvement, of course. For instance, using a library to manage the app's state, like NgRx or Pinia (for Vue, for example).

However, given the current size of the project, it's feasible to work in this way by maintaining the state in the singleton dependencies that live throughout the app.

## UI
I made some simple wireframes to have a basic idea of where I wanted to steer the UI style and the development itself. You can see these mockups at this [link](https://www.figma.com/file/YL66gEDEQnFGTs4ISZjcu4/SWAPP?type=design&node-id=0%3A1&mode=design&t=UnZOUVzrcl8A8NH5-1) (don't expect anything too elaborate xD)

## Libs/Frameworks
- Ionic v7
- Angular v16
- Rxjs v7

## Get Started
1. Run `npm i`
2. Run `nx serve swngapp`
3. Go to `http://localhost:4200`

## Demo
You can see how it works at the following [URL](https://swngapp.vercel.app/)

## Suggestions
If you think you have better ideas for carrying out this exercise, I am open to them. I love receiving feedback and improving every day.