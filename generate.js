const fs = require("fs")
const path = require("path")

for (let i = 0; i < 40; i++) {
    const before = `import { echo } from "../src/main"\ndescribe "${i + 1}", ->\n`
    const after = `\n`

    let str = before
    for (let j = 0; j < 100; j++) {

        const test = `    it "test ${i + 1}-${j + 1}", ->
        expect(echo true).toBeTrue()
\n\n`

        str += test
    }

    str += after

    const fn = path.join("test", `${i + 1}.test.coffee`)
    fs.writeFileSync(fn, str, { encoding: "utf-8" })
}

line = (i) => `export echo${i} = (x) -> x\n`
let contents = line("")
for (let i = 0; i < 10000; i++) {
    contents += line("" + (i + 1)) + "\n"
}
fs.writeFileSync(path.join("src", "main.coffee"), contents, { encoding: "utf-8" })
