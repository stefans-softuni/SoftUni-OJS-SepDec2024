function solve(path) {
    let idx = path.lastIndexOf("\\");
    let fileAndExt = path.substring(idx + 1);
    let idxDot = fileAndExt.lastIndexOf(".");
    let fileName = fileAndExt.substring(0, idxDot);
    let fileExt = fileAndExt.substring(idxDot + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');


// path = 'C:\\Internal\\training-internal\\Template.pptx'
// idx = 29
// fileAndExt = 'Template.pptx'
// idx = 8
// fileName = 'Template'
// fileExt = 'pptx