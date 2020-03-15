const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: true,
		width,
		height
	}
});

Render.run(render);
Runner.run(Runner.create(), engine);

//Walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, {
		isStatic: true
	}),
	Bodies.rectangle(width / 2, height, width, 40, {
		isStatic: true
	}),
	Bodies.rectangle(0, height / 2, 40, height, {
		isStatic: true
	}),
	Bodies.rectangle(width, height / 2, 40, height, {
		isStatic: true
	})
];
World.add(world, walls);

// MaZe Generation

const shuffle = (arr) => {
	let counter = arr.length;
	while (counter > 0) {
		const index = Math.floor(Math.random() * counter);
		counter--;
		const temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}
	return arr;
};

const grid = Array(cells).fill(null).map(() => Array(cells).fill(false));

const verticles = Array(cells).fill(null).map(() => Array(cells - 1).fill(false));
const horizontals = Array(cells - 1).fill(null).map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startCol = Math.floor(Math.random() * cells);

stepThruCell = (row, col) => {
	//If i have visited the cell at {row, column}, then return
	if (grid[row][col] === true) {
		return;
	}
	//Mark this cell as being visited
	grid[row][col] = true;
	//Assemble randomly-ordered list of neighbors
	const neighbors = shuffle([ [ row - 1, col ], [ row + 1, col ], [ row, col - 1 ], [ row, col + 1 ] ]);
	console.log(neighbors);
	//For each neighbor...

	//see if that neighbor is out of bounds

	//if we have visited that neighbor continue to next neighbor

	//remove wall from either horizontal or verticle array

	// visit next cell
};
stepThruCell(1, 1);
