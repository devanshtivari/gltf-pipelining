const gltfPipeline = require("gltf-pipeline")
const fsExtra = require("fs-extra")
const processGltf = gltfPipeline.processGltf;
const gltf = fsExtra.readJsonSync("2CylinderEngine.gltf");
const options = {
    dracoOptions:{
        compressionLevel : 7,
    },
};

    processGltf(gltf, options).then(function (results) {
      fsExtra.writeJsonSync("2CylinderEngine.gltf", results.gltf);
    });


const gltfToGlb = gltfPipeline.gltfToGlb;
const glb = fsExtra.readJsonSync("2CylinderEngine.gltf")
    gltfToGlb(gltf).then(function(results){
        fsExtra.writeFileSync("final.glb" , results.glb)
    })



