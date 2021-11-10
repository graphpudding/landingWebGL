class Engine {
    constructor(model){
      this.canvas = document.getElementById("babylon");
      this.initModel = model;
    }
createDefaultEngine(){
  return new BABYLON.Engine(this.canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false
  });
}
async asyncEngineCreation() {
  try {
    return this.createDefaultEngine();
  } catch (e) {
    return this.createDefaultEngine();
  }
}
async initFunction() {
    this.engine = await this.asyncEngineCreation();
    console.log(this.engine);
    if (!this.engine) throw 'engine should not be null.';
    this.scene = await BABYLON.SceneLoader.LoadAsync(
      "scene/",
      this.initModel,
      this.engine
    );
    this.scene.activeCamera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, -5, 0), this.scene);
    this.scene.activeCamera.attachControl(true);
    let self = this;
    this.engine.runRenderLoop(function() {
        if (self.scene && self.scene.activeCamera) {
          self.scene.render();
        }
      });
    window.scene = this.scene;
    //this.camera = this.createCamera();
}
createCamera(){
  console.log(this.scene.activeCamera);
  return this.scene.activeCamera;
}
async asyncLoad(nameNum, names, isChar) {
  return new Promise(function(resolve, reject) {
    asyncLoad();
    function asyncLoad() {
      //BABYLON.SceneLoader.AppendAsync("scene/", names[nameNum].model, this.scene).then(() => {});
    }
  })
}
}
export{Engine}
