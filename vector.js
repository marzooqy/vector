function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.angle = function() {
	return Math.atan2(this.y, this.x);
};

Vector.prototype.clone = function() {
	return new Vector(this.x, this.y);
};

Vector.prototype.distance = function(vector) {
	return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
};

Vector.prototype.equals = function(vector) {
	return this.x == vector.x && this.y == vector.y;
};

Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.normalize = function() {
	var length = this.length();

	if(length == 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.x /= length;
		this.y /= length;
	}

	return this;
};

Vector.prototype.rotate = function(angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);

	var nx = this.x * cos - this.y * sin;
	var ny = this.x * sin + this.y * cos;

	this.x = nx;
	this.y = ny;

	return this;
};

Vector.prototype.toString = function() {
	return '(' + this.x + ', ' + this.y + ')';
};

Vector.prototype.zero = function() {
	this.x = this.y = 0;
	return this;
};
