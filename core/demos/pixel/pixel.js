function pixel(center, x, y, radius) {
    var r = typeof radius === 'undefined' ? 25 : radius;
    return new Attraction(new Vector(center.x + x * 15, center.y + y * 15), r, -100000);
}