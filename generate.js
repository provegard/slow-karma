const fs = require("fs")
const path = require("path")

for (let i = 0; i < 40; i++) {
    const before = `describe("${i + 1}", () => {\n`
    const after = `})\n`

    let str = before
    for (let j = 0; j < 100; j++) {

        const test = `    it("test ${i + 1}-${j + 1}", () => {
        expect(true).toBeTrue()
    })\n\n`

        str += test
    }

    str += after

    const fn = path.join("test", `${i + 1}.test.js`)
    fs.writeFileSync(fn, str, { encoding: "utf-8" })
}