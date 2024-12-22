class rectangle {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	area() {
		const area = this.width * this.height;
		return area;
	}
	paint() {
		console.log(`painting with color ${this.color}`);
	}
}
const rect = new rectangle(2, 4);
const area = rect.area();
console.log(area);
