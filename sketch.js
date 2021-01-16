function setup() {
    createCanvas(1200, 750);
    background(0);
    noStroke();
    noFill();

    recurse(width / 2, height / 2, 250);

}



function recurse(x, y, scale) {
    if (scale < 5) {
        return;
    }

    fill(random(0, 255), random(0, 255), random(0, 255), 50);
    ellipse(x, y, scale);

    recurse(x + scale / 2, y + random(-scale, scale), scale * 0.75);
    recurse(x - scale / 2, y + random(-scale, scale), scale * 0.75);
}