const gltfPipeline = require("gltf-pipeline");
const fsExtra = require("fs-extra");
const processGltf = gltfPipeline.processGltf;
const gltf = fsExtra.readJsonSync("2CylinderEngine.gltf");
const options = {
  dracoOptions: {
    compressionLevel: 7,
  },
};
processGltf(gltf, options).then(function (results) {
  fsExtra.writeJsonSync("2CylinderEngine-draco.gltf", results.gltf);
});
