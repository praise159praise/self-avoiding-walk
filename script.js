
//TO-DO : come up with better algorithm
const make2dArray = (width, height, fillVal = null) => Array(height).fill().map(item => Array(width).fill(fillVal))

let grid
let spacing
let cols, rows
let path = []
let spot




function setup() {
    createCanvas(400, 400)
    spacing = 50
    cols = floor(width / spacing)
    rows = floor(height / spacing)

    background(1)
    grid = make2dArray(cols, rows)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j)
        }
    }
    spot = grid[0][0]
    translate(spacing / 2, spacing / 2)
    path.push(spot)
    spot.visited = true

}

const isValid = (i, j) => {
    if (i < 0 || i >= cols || j < 0 || j >= rows) return false
    return !grid[i][j].visited
}
function draw() {
    background(0)
    translate(spacing / 2, spacing / 2)


    for (let i = 0; i <= 1; i++) {
        spot = spot.nextSpot()
        if (!spot) {
            let stuck = path.pop()
            spot = path[path.length - 1]
            stuck.clear()
            console.log('stuck')
            // noLoop()
        } else {
            path.push(spot)
            spot.visited = true
        }

        if (path.length == cols * rows) {
            console.log('solved')
            noLoop()
        }
    }
    stroke(255)
    strokeWeight(1)
    noFill()
    beginShape()

    for (let spot of path) {
        strokeWeight(spacing / 2)
        point(spot.x, spot.y)
        strokeWeight(1)
        vertex(spot.x, spot.y)
    }
    endShape()
    stroke(255)
    strokeWeight(spacing / 2)
    point(spot.x, spot.y)

}