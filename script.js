var x
var y

const make2dArray = (width, height, fillVal) => Array(height).fill().map(item => Array(width).fill(fillVal))

let grid
let spacing
let cols, rows

let allOptions = [ /*right*/{ dx: 1, dy: 0 }, /*left*/{ dx: -1, dy: 0 }, /*down*/{ dx: 0, dy: 1 }, /*up*/{ dx: 0, dy: -1 }]
function setup() {
    createCanvas(500, 500)
    spacing = 10
    cols = floor(width / spacing)
    rows = floor(height / spacing)
    x = cols / 2
    y = rows / 2
    background(1)
    grid = make2dArray(cols, rows, false)
    grid[x][y] = true
}

const isValid = (i, j) => {
    if (i < 0 || i >= cols || j < 0 || j >= rows) return false
    return !grid[i][j]
}
function draw() {
    stroke(255)
    strokeWeight(spacing / 2)
    point(x * spacing, y * spacing)

    var r = floor(random(4))

    let options = []
    for (let option of allOptions) {
        let newX = x + option.dx
        let newY = y + option.dy
        if (isValid(newX, newY)) options.push(option)
    }

    if (options.length > 0) {
        let step = random(options)

        stroke(255)
        beginShape()
        strokeWeight(1)
        vertex(x * spacing, y * spacing)
        x += step.dx
        y += step.dy
        vertex(x * spacing, y * spacing)
        endShape()



        grid[x][y] = true
    } else {
        console.log(" I'm stuck ")
        noLoop()
    }

    // if (x + 10 > width || x + 10 < 0 || y + 10 > height || y + 10 < 0) {
    //     // x=floor(random(width))
    //     // y=floor(random(height))
    //     x = 250
    //     y = 250
    // }
}