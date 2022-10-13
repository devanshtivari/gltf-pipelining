const gltfPipeline = require("gltf-pipeline");
const fsExtra = require("fs-extra");
const gltfToGlb = gltfPipeline.gltfToGlb;
const gltf = fsExtra.readJsonSync("2CylinderEngine-draco.gltf");
gltfToGlb(gltf).then(function (results) {
  fsExtra.writeFileSync("final.glb", results.glb);
});
