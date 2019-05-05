README: Notes Conway's Game of Life
Time-stamp: <2019-03-02 Carlos Meza>
------------------------------------------------------------

Class Number:
CPSC 439 Section 1 #20705

Conway's Game of Life

Team CMM
Members: Carlos Meza

Intro:
For this project we used a a circular algorithm to convert the
the states of the cells according to Conway's Game of life requirements.
Then saved and stored each generation (array of cells) into a 2d array.
Then we used the 2d array to paint the states of each cell in the generations,
unto an html canvas.

Files in Zip:
assests Folder
	contains draw-stuff.js, sketch.js, styles.css,
	
p5 Folder:
	contains p5.js, p5.min.js

Js_holder Folder
	contains js-1.html

README.TXT

ProjectReport.pdf

External Dependencies:
p5.js is an external library that simplifies or rather makes it easier to draw unto a html canvas.

Setup and Installation:
Download .zip file
Extract files from .zip file
Open JS_holder folder
Double click/ drag and drop to Chrome js-1.html

Features:
Displays Conwasy's Game of Life
Ablitity to press any key to start a a random new population.


Bugs:
Was able to display the state changes but however it did tremendously decreased the performance of the program. 
I commented out the function blink() from draw that showed state change for given state.
In addition to the paraghaphs on js-1.html.