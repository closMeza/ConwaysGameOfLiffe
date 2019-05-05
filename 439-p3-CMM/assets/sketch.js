/*
Timestamp: 5:00pm 2/27/2019
Author: Carlos Meza
Contact: carlosmeza33@csu.fullerton.edu
Description: This program generates Wolfram's rule 45 by using a 2D array
             where each row is generation of cell automata.
            It does by first creating the first generation, then it scans
            the generation and creates new ones based on Wolfram's rule.
            Then it displays the 2D array onto a canvas.


*/

//===================== program logic  =========

//TM only counts the number of live cells that surrond head
//TM works on index rather than reading of 1 and 0's 

//global variables

	var canvas = document.getElementById( "stateTable" );
	var ctx = canvas.getContext( "2d" );

	draw_rect(ctx);

	let grid; //2D automata
	let rows = 30;
	let cols = 17;
	
	let stateCols =11;
	
	let stateTable;
	
	//intializing head postion of TM
	let tmX =0;
	let tmY = 0;
	
	let currState = 0;



function setup()
{
	
	
	frameRate(40);
	
	createCanvas(300, 170);
	

	//createTable(11, 1);
	
	//intializes 2dArray and fills with dead cells
	grid = makeGrid(rows, cols);
	for(let i =0; i < cols; i++)
	{
		for(let j = 0; j < rows; j++)
			grid[i][j] = floor(random(2));
	}
	
	//grid = populateGrid(rows, cols);

	stateTable = createStateTable(ctx);
	
	
	
	

}

function draw()
{
	
	background(0);
	displayGrid();
	drawStateTable(ctx);
	
	//let next = makeGrid(rows, cols);
	
	
	//grid = next;
	
	let next = makeGrid(rows, cols);
	

		
	for(let i =0; i < cols; i++)
	{
		
		for(let j = 0; j < rows; j++)
		{
			let count =0;
			//Tm head starting point
			tmX = j;
			tmY = i;
			
			state = grid[tmY][tmX];
			
			//creates animation to for state diagram
			
			//state 1 reads
			currState = 1;
			//blink(currState);
			
			// state 2 moves right checks if out of range if so reverts it back to j
			currState = 2;
			//blink(currState);
			tmX = j+1;
			
			//out of bounds check
			if(tmX >= rows)
			{
				tmX = j;
				
			}
			else if(grid[tmY][tmX] == 1) 
			{
				count++;
				
			}
			
			//state 3 reads moves down
			currState = 3;
			//blink(currState);
			tmY = i+1;
			tmX = j+1;
			if(tmY >= cols)
			{
				tmY = i;
				
			}
			else if(tmX >=rows)
			{
				tmX = j;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
				
			}
			
			//state 4 moves left
			currState = 4;
			//blink(currState);
			tmX = j;
			tmY = i+1;
			if(tmY >= cols)
			{
				tmY = i;
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			//state 5 moves left
			currState = 5;
			//blink(currState);
			tmX = j -1;
			tmY = i+1;
			if(tmY >= cols)
			{
				tmY = i;
			}
			else if(tmX < 0)
			{
				tmX = j;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			//state 6 moves up
			currState = 6;
			//blink(currState);
			tmX = j -1;
			tmY = i;
			
			if(tmX < 0)
			{
				tmX = j;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			//state 7 moves up
			currState = 7;
			//blink(currState);
			tmX = j -1;
			tmY = i -1;
			
			if(tmX < 0)
			{
				tmX = j;
				
			}
			else if(tmY < 0)
			{
				tmY = i;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			//state 8 moves right
			currState = 8;
			//blink(currState);
			tmY = i-1;
			tmX = j;
			
			if(tmY < 0)
			{
				tmY = i;
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			//state 9 moves right
			currState = 9;
			//blink(currState);
			tmY = i-1;
			tmX = j +1;
			
			if(tmY < 0)
			{
				tmY = i;
			}
			else if(tmX >= rows)
			{
				tmX = j;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				count++;
			}
			
			// state 10 moves down
			currState = 10;
			//blink(currState);
			tmX = j+1;
			
			if(tmX >= rows)
			{
				tmX = i;
				
			}
			else if(grid[tmY][tmX] == 1)
			{
				//count++;
			}
			
			//state 11 change current index
			currState =11;
			//blink(currState);
			tmX = j;
			tmY = i;
			if (state == 0 && count == 3) 
			{
				next[i][j] = 1;
			} 
			else if (state == 1 && (count < 2 || count > 3)) 
			{
				next[i][j] = 0;
			} 
			else 
			{
				next[i][j] = state;
			}

			
			/*ctx.save();
			ctx.fillStyle = "red";
			ctx.fillText("1", 15, 7);
			ctx.restore();*/
			
			
			
			
		}
			
	}
	
	if(next == grid)
	{
		document.getElementById('noChange').innerHTML = "No Population change press any key to create a random new population";
		
	}
	else
		grid = next;
	
	
	
}

function blink(currState)
{
	var state;
	switch(currState)
	{
		case 1:
			state = 'state1';
			/*ctx.strokeStyle = 'red';
			
			ctx.rect(0*10, 0, 10, 10);
			ctx.stroke();
			ctx.restore();
			ctx.save();*/
			break;
		case 2:
			state = 'state2'
			break;
		case 3:
			state = 'state3';
			break;
		case 4:
			state = 'state4';
			break;
		case 5:
			state = 'state5';
			break;
		case 6:
			state = 'state6';
			break;
		case 7:
			state = 'state7';
			break;
		case 8:
			state = 'state8';
			break;
		case 9:
			state = 'state9';
			break;
		case 10:
			state = 'state10';
			break;
		case 11:
			state = 'state11';
			break;
	}
	

	var blink_speed = 1; // every 1000 == 1 second, adjust to suit
	var t = setInterval(function () {
	var blink= document.getElementById(state);
	
	blink.style.color='red';
	blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
	}, blink_speed);	
	


}



function createStateTable()
{
	arr = new Array(stateCols);
	for(let i = 0; i < stateCols; i++)
	{
		arr[i] = 0;
		
	}
	
	return arr;
	
}

function drawStateTable(ctx)
{
	
	for(let i = 0; i < stateCols; i++)
	{
		if(arr[i] == 0)
		{
			ctx.save();
            ctx.strokeStyle = 'black';
            ctx.fillStyle = fill;
            ctx.lineWidth = 2//;
			
			ctx.beginPath();
			ctx.rect(i*10, 0, 10, 10);
			ctx.stroke();
			var fill = 'white';
			ctx.fillStyle = fill;
			ctx.fill();
			
			
		}
		 ctx.restore();
		
	}
	ctx.font = "8px Comic Sans MS";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
	ctx.fillText("0", 5, 7);
	ctx.fillText("0", 5, 7);
    ctx.fillText("1", 15, 7);
    ctx.fillText("2", 25, 7);
    ctx.fillText("3", 35, 7);
	ctx.fillText("4", 45, 7);
	ctx.fillText("5", 55, 7);
	ctx.fillText("6", 65, 7);
	ctx.fillText("7", 75, 7);
	ctx.fillText("8", 85, 7);
	ctx.fillText("9", 95, 7);
	ctx.fillText("10", 105, 7);
	
}

function makeGrid(rows, cols)
{
	
	let arr = new Array(cols);
	for( let i =0; i < cols; i++)
	{
		arr[i] = new Array(rows);
		
	}
	return arr;
}


function displayGrid()
{
	
	for(let i =0; i < cols; i++)
	{
		for(let j = 0; j < rows; j++)
		{
			let x = j * 10;
			let y = i * 10;
			
			
			if(grid[i][j] == 1)
			{
				fill(0);
				stroke(255);
				rect(x, y, 10, 10);
			}
			else
			{
				fill(255);
				stroke(0);
				rect(x, y, 10, 10);
			}
				
		
		
		
		}
	}
	

}

function keyPressed()
{
	grid = makeGrid(rows, cols);
	for(let i =0; i < cols; i++)
	{
		for(let j = 0; j < rows; j++)
			grid[i][j] = floor(random(2));
	}
	draw();
	
	
}
