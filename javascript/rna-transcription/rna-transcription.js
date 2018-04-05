const DnaTranscriber = function () {
	this.rna = new Map([
		['G', 'C'],
		['C', 'G'],
		['T', 'A'],
		['A', 'U']
	])
}

DnaTranscriber.prototype.toRna = function (nucleotide) {
	return [...nucleotide].map(value => {
		if (!this.rna.has(value)) {
			throw new Error('Invalid input')
		}
		return this.rna.get(value)
	}).join('')
}

module.exports = DnaTranscriber
