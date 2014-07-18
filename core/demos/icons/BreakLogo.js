function BreakLogo(pos){

  this.pos = new Vector(pos.x, pos.y);

  // Attraction
  this.attraction = [

    // B
    new Attraction(new Vector(pos.x - 260, pos.y), 1200, 1000),

    // R
    new Attraction(new Vector(pos.x - 130, pos.y), 1200, 50),

    // E
    new Attraction(pos, 1200, 1),

    // A
    new Attraction(new Vector(pos.x + 120, pos.y), 1200, 50),

    // K
    new Attraction(new Vector(pos.x + 240, pos.y), 1200, 1000)

  ];

  // Repulsion
  this.canvas = [

    // B
    new pixel(this.pos, -19.4, -2),
    new pixel(this.pos, -19, -2),
    new pixel(this.pos, -18, -2),
    new pixel(this.pos, -17, -2),
    new pixel(this.pos, -16, -2),
    new pixel(this.pos, -15, -2),

    new pixel(this.pos, -19.4, -1),
    new pixel(this.pos, -19, -1),
    new pixel(this.pos, -18, -1),
    new pixel(this.pos, -17, -1),
    new pixel(this.pos, -16, -1),
    new pixel(this.pos, -15.5, -1),

    new pixel(this.pos, -19.4, 0),
    new pixel(this.pos, -19, 0),
    new pixel(this.pos, -18, 0),
    new pixel(this.pos, -17, 0),
    new pixel(this.pos, -16, 0),
    new pixel(this.pos, -15.5, 0),

    new pixel(this.pos, -19.4, 1),
    new pixel(this.pos, -19, 1),
    new pixel(this.pos, -18, 1),
    new pixel(this.pos, -17, 1),
    new pixel(this.pos, -16, 1),
    new pixel(this.pos, -15, 1),

    new pixel(this.pos, -19.4, 2.5),
    new pixel(this.pos, -19, 2.5),
    new pixel(this.pos, -18, 2.5),
    new pixel(this.pos, -17, 2.5),
    new pixel(this.pos, -16, 2.5),
    new pixel(this.pos, -15, 2.5),


    // R
    new pixel(this.pos, -11, -2),
    new pixel(this.pos, -10, -2),
    new pixel(this.pos, -9, -2),
    new pixel(this.pos, -8, -2),
    new pixel(this.pos, -7, -2),
    new pixel(this.pos, -6.5, -2),

    new pixel(this.pos, -11, -1),
    new pixel(this.pos, -10, -1),
    new pixel(this.pos, -9, -1),
    new pixel(this.pos, -8, -1),
    new pixel(this.pos, -7, -1),
    new pixel(this.pos, -6.5, -1),

    new pixel(this.pos, -11, 0),
    new pixel(this.pos, -10, 0),
    new pixel(this.pos, -9, 0),
    new pixel(this.pos, -8, 0),
    new pixel(this.pos, -7, 0),

    new pixel(this.pos, -11, 1),
    new pixel(this.pos, -10, 1),
    new pixel(this.pos, -8.5, 1),
    new pixel(this.pos, -8, 1),

    new pixel(this.pos, -11, 2),
    new pixel(this.pos, -10.7, 2),
    new pixel(this.pos, -7.5, 2),
    new pixel(this.pos, -7, 2),

    new pixel(this.pos, -11, 2.5),
    new pixel(this.pos, -10.7, 2.5),
    new pixel(this.pos, -7.3, 2.5),
    new pixel(this.pos, -6.5, 2.5),
    new pixel(this.pos, -6.6, 2.8),


    // E
    new pixel(this.pos, -2.7, -2.2),
    new pixel(this.pos, -2, -2.2),
    new pixel(this.pos, -1, -2.2),
    new pixel(this.pos, 0, -2.2),
    new pixel(this.pos, 1, -2.2),
    new pixel(this.pos, 1.5, -2.2),

    new pixel(this.pos, -2.7, -1),
    new pixel(this.pos, -2, -1),
    new pixel(this.pos, -1, -1),
    new pixel(this.pos, 0, -1),
    new pixel(this.pos, 1, -1),

    new pixel(this.pos, -2.7, 0),
    new pixel(this.pos, -2, 0),
    new pixel(this.pos, -1, 0),
    new pixel(this.pos, 0, 0),
    new pixel(this.pos, 1, 0),

    new pixel(this.pos, -2.7, 1),
    new pixel(this.pos, -2, 1),
    new pixel(this.pos, -1, 1),
    new pixel(this.pos, 0, 1),
    new pixel(this.pos, 1, 1),

    new pixel(this.pos, -2.7, 2.6),
    new pixel(this.pos, -2, 2.6),
    new pixel(this.pos, -1, 2.6),
    new pixel(this.pos, 0, 2.6),
    new pixel(this.pos, 1, 2.6),
    new pixel(this.pos, 1.5, 2.6),


    // A
    new pixel(this.pos, 7, -2.2),
    new pixel(this.pos, 8, -2.2),

    new pixel(this.pos, 6.6, -1),
    new pixel(this.pos, 7, -1),
    new pixel(this.pos, 8.5, -1),

    new pixel(this.pos, 6.2, 0),
    new pixel(this.pos, 7, 0),
    new pixel(this.pos, 8, 0),
    new pixel(this.pos, 9, 0),

    new pixel(this.pos, 5.8, 1),
    new pixel(this.pos, 6, 1),
    new pixel(this.pos, 7, 1),
    new pixel(this.pos, 8, 1),
    new pixel(this.pos, 9, 1),
    new pixel(this.pos, 9.4, 1),

    new pixel(this.pos, 5.3, 2),
    new pixel(this.pos, 6, 1.8),
    new pixel(this.pos, 7, 1.8),
    new pixel(this.pos, 8, 1.8),
    new pixel(this.pos, 9, 2),
    new pixel(this.pos, 9.8, 2),

    new pixel(this.pos, 4.7, 2.7),
    new pixel(this.pos, 5, 2.7),
    new pixel(this.pos, 9.7, 2.7),
    new pixel(this.pos, 10.3, 2.7),


    // K
    new pixel(this.pos, 13.7, -2.2),
    new pixel(this.pos, 14, -2.2),
    new pixel(this.pos, 18, -2.2),
    new pixel(this.pos, 19, -3, 17),
    new pixel(this.pos, 20, -3.4, 10),
    new pixel(this.pos, 21, -3.4, 10),

    new pixel(this.pos, 13.7, -1),
    new pixel(this.pos, 14, -1),
    new pixel(this.pos, 16, -1),
    new pixel(this.pos, 17, -1),

    new pixel(this.pos, 13.7, 0),
    new pixel(this.pos, 14, 0),
    new pixel(this.pos, 16, 0),
    new pixel(this.pos, 17, 0),

    new pixel(this.pos, 13.7, 1),
    new pixel(this.pos, 14, 1),
    new pixel(this.pos, 16, 1),
    new pixel(this.pos, 17.1, 1),

    new pixel(this.pos, 13.7, 2),
    new pixel(this.pos, 14, 2),
    new pixel(this.pos, 17.5, 2),
    new pixel(this.pos, 18.2, 2),

    new pixel(this.pos, 13.7, 2.8),
    new pixel(this.pos, 14, 2.8),
    new pixel(this.pos, 18.3, 2.8),
    new pixel(this.pos, 18.8, 2.8),
    new pixel(this.pos, 19, 3.2, 15)

  ];
}
