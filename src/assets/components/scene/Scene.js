import * as THREE from "three"
import { Duck, GeneralLights, Sphere } from "./sceneSubjects"

export default class SceneManager{
    clock = new THREE.Clock()

    constructor({refContainer, screenDimentions}){
        this.screenDimentions = screenDimentions
        this.scene = this._buildScene()
        this.renderer = this._buildRender(refContainer)
        this.camera = this._buildCamera()
        this.sceneSubjects = this._createSceneSubjects()
    }

    _buildScene(){
        const scene = new THREE.Scene()
        return scene
    }
    
    _buildRender(refContainer){
        const renderer = new THREE.WebGLRenderer({antialias: true})
        this.canvas = renderer.domElement
        this._buildCanvas(this.canvas, refContainer)

        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR)
        renderer.setSize(this.screenDimentions.get("width"), this.screenDimentions.get("height"))

        // renderer.gammaInput = true
        // renderer.gammaOutput = true

        return renderer
    }

    _buildCanvas(canvasEle, refContainer){
        refContainer.current?.appendChild(canvasEle)
    }

    _buildCamera(){
        let aspectRatio = this.screenDimentions.get("width") / this.screenDimentions.get("height")
        const camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000)
        camera.position.set(0, 0)
        camera.position.z = 20
        
        return camera
    }

    _createSceneSubjects(){
        const sceneSubjects = [
            new GeneralLights(this.scene),
            new Duck(this.scene)
        ]

        return sceneSubjects
    }

    update(){
        const elapsedTime = this.clock.getElapsedTime()

        for(let subject of this.sceneSubjects)
            subject.update(elapsedTime)

        this.renderer.render(this.scene, this.camera)
    }

    close(){
        this.renderer.dispose()
    }

}