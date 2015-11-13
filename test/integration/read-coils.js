var assert = require("assert");
var Help   = require("../help");

describe("Read Coils", function () {
	it("should be [ start, end ] => [ bit, bit, .. ]", function () {
		for (var i = 0; i < Help.trials; i++) {
			var start = Math.round(Math.random() * 100);
			var end   = start + Math.round(Math.random() * 100);
			var bits  = Help.randomBitList(end - start + 1);

			assert.deepEqual(
				{ start : start, end : end },
				Help.modbus.readCoils.request.parse(
					Help.modbus.readCoils.request.build(start, end)
				)
			);
			assert.deepEqual(
				bits,
				Help.modbus.readCoils.response.parse(
					Help.modbus.readCoils.response.build(bits)
				)
			);
		}
	});
});
