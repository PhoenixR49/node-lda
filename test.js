const lda = require("./lib/lda");

const text =
	"Cats are small. Dogs are big. Cats like to chase mice. Dogs like to eat bones.";
const documents = text.match(/[^\.!\?]+[\.!\?]+/g);

const result = lda(documents, 2, 5);

// For each topic.
for (const i in result) {
	const row = result[i];
	console.log(`Topic ${Number.parseInt(i) + 1}`);

	// For each term.
	for (const j in row) {
		const term = row[j];
		console.log(`${term.term} (${term.probability}%)`);
	}

	console.log("");
}
