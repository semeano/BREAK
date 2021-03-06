function EB(pos){
    this.pos = new Vector(pos.x, pos.y);
    this.canvas = [
        
        new pixel(this.pos, -4, -4),
        new pixel(this.pos, -3, -4),
        new pixel(this.pos, -2, -4),
        new pixel(this.pos, -1, -4),
        new pixel(this.pos, 0, -4),
        new pixel(this.pos, 1, -4),
        new pixel(this.pos, 2, -4),
        new pixel(this.pos, 3, -4),
        
        new pixel(this.pos, -5, -3),
        new pixel(this.pos, -4, -3),
        new pixel(this.pos, -3, -3),
        new pixel(this.pos, -2, -3),
        new pixel(this.pos, -1, -3),
        new pixel(this.pos, 0, -3),
        new pixel(this.pos, 1, -3),
        new pixel(this.pos, 2, -3),
        new pixel(this.pos, 3, -3),
        new pixel(this.pos, 4, -3),
        
        new pixel(this.pos, -6, -2),
        new pixel(this.pos, -5, -2),
        new pixel(this.pos, -4, -2),
        new pixel(this.pos, -3, -2),
        new pixel(this.pos, -2, -2),
        new pixel(this.pos, -1, -2),
        new pixel(this.pos, 0, -2),
        new pixel(this.pos, 1, -2),
        new pixel(this.pos, 2, -2),
        new pixel(this.pos, 3, -2),
        new pixel(this.pos, 4, -2),
        new pixel(this.pos, 5, -2),
        
        new pixel(this.pos, -6, -1),
        new pixel(this.pos, -5, -1),
        new pixel(this.pos, -4, -1),
        new pixel(this.pos, -3, -1),
        new pixel(this.pos, -2, -1),
        new pixel(this.pos, -1, -1),
        new pixel(this.pos, 0, -1),
        new pixel(this.pos, 1, -1),
        new pixel(this.pos, 2, -1),
        new pixel(this.pos, 3, -1),
        new pixel(this.pos, 4, -1),
        new pixel(this.pos, 5, -1),
        
        new pixel(this.pos, -6, 0),
        new pixel(this.pos, -5, 0),
        new pixel(this.pos, -4, 0),
        new pixel(this.pos, -3, 0),
        new pixel(this.pos, -2, 0),
        new pixel(this.pos, -1, 0),
        new pixel(this.pos, 0, 0),
        new pixel(this.pos, 1, 0),
        new pixel(this.pos, 2, 0),
        new pixel(this.pos, 3, 0),
        new pixel(this.pos, 4, 0),
        new pixel(this.pos, 5, 0),
        
        new pixel(this.pos, -6, 1),
        new pixel(this.pos, -5, 1),
        new pixel(this.pos, -4, 1),
        new pixel(this.pos, -3, 1),
        new pixel(this.pos, -2, 1),
        new pixel(this.pos, -1, 1),
        new pixel(this.pos, 0, 1),
        new pixel(this.pos, 1, 1),
        new pixel(this.pos, 2, 1),
        new pixel(this.pos, 3, 1),
        new pixel(this.pos, 4, 1),
        new pixel(this.pos, 5, 1),
        new pixel(this.pos, 6, 1, 15),
        
        new pixel(this.pos, -6, 2),
        new pixel(this.pos, -5, 2),
        new pixel(this.pos, -4, 2),
        new pixel(this.pos, -3, 2),
        new pixel(this.pos, -2, 2),
        new pixel(this.pos, -1, 2),
        new pixel(this.pos, 0, 2),
        new pixel(this.pos, 1, 2),
        new pixel(this.pos, 2, 2),
        new pixel(this.pos, 3, 2),
        new pixel(this.pos, 4, 2),
        new pixel(this.pos, 5, 2),
        new pixel(this.pos, 6, 2),
        new pixel(this.pos, 7, 2, 15),
        
        new pixel(this.pos, -7, 3, 15),
        new pixel(this.pos, -6, 3),
        new pixel(this.pos, -5, 3),
        new pixel(this.pos, -4, 3),
        new pixel(this.pos, -3, 3),
        new pixel(this.pos, -2, 3),
        new pixel(this.pos, -1, 3),
        new pixel(this.pos, 0, 3),
        
        new pixel(this.pos, -8, 4, 15),
        new pixel(this.pos, -7, 4),
        new pixel(this.pos, -6, 4),
        new pixel(this.pos, -5, 4),
        new pixel(this.pos -4, 4),
        new pixel(this.pos, -3, 4),
        new pixel(this.pos, -2, 4),
        new pixel(this.pos, -1, 4),
        new pixel(this.pos, 0, 4),
        
        new pixel(this.pos, 0, 5, 15),
        new pixel(this.pos, -1, 5, 15),
        
        new pixel(this.pos, 0, 6, 15),
        new pixel(this.pos, -1, 6, 15),
        
        new pixel(this.pos, 0, 7, 15),
        new pixel(this.pos, -1, 7, 15),
        
        new pixel(this.pos, 0, 8, 15)
        
    ];
}