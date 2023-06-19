window.fncHexagon = function() {
    if (document.getElementById('shape1').getAttribute('class') !== 'hex') {
        document.getElementById('shape1').setAttribute('class', 'hex')
    }
    if (document.getElementById('shape2').getAttribute('class') !== 'hex') {
        document.getElementById('shape2').setAttribute('class', 'hex')
    }
    if (document.getElementById('shape3').getAttribute('class') !== 'hex') {
        document.getElementById('shape3').setAttribute('class', 'hex')
    }
    if (document.getElementById('shape4').getAttribute('class') !== 'hex') {
        document.getElementById('shape4').setAttribute('class', 'hex')
    }
    if (document.getElementById('shapeHex').getAttribute('class') !== 'activeShapeChoice') {
        document.getElementById('shapeHex').setAttribute('class', 'activeShapeChoice')
    }
    if (document.getElementById('shapeCircle').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeCircle').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeSquare').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeSquare').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeRandShape').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeRandShape').setAttribute('class', 'shapeChoice')
    }
}

window.fncCircle = function() {
    if (document.getElementById('shape1').getAttribute('class') !== 'circle') {
        document.getElementById('shape1').setAttribute('class', 'circle')
    }
    if (document.getElementById('shape2').getAttribute('class') !== 'circle') {
        document.getElementById('shape2').setAttribute('class', 'circle')
    }
    if (document.getElementById('shape3').getAttribute('class') !== 'circle') {
        document.getElementById('shape3').setAttribute('class', 'circle')
    }
    if (document.getElementById('shape4').getAttribute('class') !== 'circle') {
        document.getElementById('shape4').setAttribute('class', 'circle')
    }
    if (document.getElementById('shapeCircle').getAttribute('class') !== 'activeShapeChoice') {
        document.getElementById('shapeCircle').setAttribute('class', 'activeShapeChoice')
    }
    if (document.getElementById('shapeHex').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeHex').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeSquare').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeSquare').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeRandShape').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeRandShape').setAttribute('class', 'shapeChoice')
    }
}

window.fncSquare = function() {
    if (document.getElementById('shape1').getAttribute('class') !== 'square') {
        document.getElementById('shape1').setAttribute('class', 'square')
    }
    if (document.getElementById('shape2').getAttribute('class') !== 'square') {
        document.getElementById('shape2').setAttribute('class', 'square')
    }
    if (document.getElementById('shape3').getAttribute('class') !== 'square') {
        document.getElementById('shape3').setAttribute('class', 'square')
    }
    if (document.getElementById('shape4').getAttribute('class') !== 'square') {
        document.getElementById('shape4').setAttribute('class', 'square')
    }
    if (document.getElementById('shapeSquare').getAttribute('class') !== 'activeShapeChoice') {
        document.getElementById('shapeSquare').setAttribute('class', 'activeShapeChoice')
    }
    if (document.getElementById('shapeHex').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeHex').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeCircle').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeCircle').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeRandShape').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeRandShape').setAttribute('class', 'shapeChoice')
    }
}

var shapeArray = [
    'square',
    'circle',
    'hex',
]
window.fncRandShape = function() {
    document.getElementById('shape1').setAttribute('class', shapeArray[Math.floor(Math.random()*shapeArray.length)])
    document.getElementById('shape2').setAttribute('class', shapeArray[Math.floor(Math.random()*shapeArray.length)])
    document.getElementById('shape3').setAttribute('class', shapeArray[Math.floor(Math.random()*shapeArray.length)])
    document.getElementById('shape4').setAttribute('class', shapeArray[Math.floor(Math.random()*shapeArray.length)])
    if (document.getElementById('shapeRandShape').getAttribute('class') !== 'activeShapeChoice') {
        document.getElementById('shapeRandShape').setAttribute('class', 'activeShapeChoice')
    }
    if (document.getElementById('shapeCircle').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeCircle').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeSquare').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeSquare').setAttribute('class', 'shapeChoice')
    }
    if (document.getElementById('shapeHex').getAttribute('class') !== 'shapeChoice') {
        document.getElementById('shapeHex').setAttribute('class', 'shapeChoice')
    }
}