# ZipHRCodingChallenge


## (This is an unfinished project so is lacking some final features such as mobile optimisation and fully working implemented features).

## Live Site

`https://ziphr-numan-mumtaz.netlify.app/`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Packages Used

Angular

Bootstrap

Angular ESLint

## Install Instructions

Download the GitHub repo to your Computer.

Unzip and open the project folder (in your Code Editor or folder with NPM installed).

Code Editor - open folder in Code Editor - open terminal and type `npm install` - once installed, run `ng serve`.

Folder - open project folder - press 'shift + mouse right click' on the background - type `npm install` and press enter - once installed, run `ng serve`.

If you are missing Node.js and NPM, please go here for instructions on how to download: `https://docs.npmjs.com/downloading-and-installing-node-js-and-npm`.

## How to Use

Navigation is provided on the left sidebar and the majority of list or details pages provide navigation at the top of the page to go back to the lists page of the content or to navigate back to the Dashboard main page.

The homepage is the main Dashboard, this is where the statistics of the API are shown (posts, albums and photos). It also provides a summary of the latest posts with links to
the details pages where you may read more about the post. There is also the recent photos which the user can view too.

The Posts page is a paginated table listing all the posts from the API, upon clicking on a User in the table, this will navigate to the Users Details page where it will list
more personal information about the user including their name and their username. Upon clicking the title of the post, this will, again, go to the Post Details page which lists
the full content of the posts. The user is able to use the search bar to narrow which posts they see in the table matching the string provided in the input. The user is also able
to sort which order the content will show in with the dropdown sort, based on the different table columns.

The Albums page is similar to the Posts page however it displays Albums including the user whom created them. They are also allowed to search to narrow down the albums they see
by title and they are able to sort by the User or Title also. Upon clicking the User link in an album, this will go to the User Details page. Upon clicking the title of the album,
this will bring the user to the Album Details page.

The Album Details page provides the user with the title of the Album, the User who created it and the Photos belonging to that specific album. The User link navigates to the
user details page once again and the photo title links navigate to the corresponding Photos Details page.

The Photos page is displaying paginated photos belonging to all albums and users from the API in a list. Users are able to search and sort these photos by Album or the Photos title.
Upon clicking the View Album button underneath a photo, this will navigate to the Album this photo belongs to. Upon clicking the Photo title, this will navigate to the Photos Details
page.

The Photo Details page provides the user with the photos name, another navigation link to the corresponding album it belongs to and the full sized image of the photo is displayed for
the user to see.

As I mentioned earlier, all User links navigate to that Users Details page, this provides information such as the users email address, username, full name, City and their Companies name.
Also listed is all the Albums and Posts created by this specific user. Upon clicking the titles of either, this will bring the user to the corresponding details page for either Album or Post.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
