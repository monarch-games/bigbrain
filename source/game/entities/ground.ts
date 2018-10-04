
import * as babylon from "babylonjs"
import {MeshBuilder, Scene, PhysicsImpostor} from "babylonjs"

import {Context} from "../game-interfaces"

import {Entity} from "../../entity"
import {StateEntry} from "../../interfaces"

export interface GroundEntry extends StateEntry {
	type: "Ground"
}

export class Ground extends Entity<Context, GroundEntry> {
	constructor(o) {
		super(o)
		const {scene} = this.context
		this.loadGround(scene)
	}

	private async loadGround(scene: Scene) {
		const mesh = MeshBuilder.CreateGround("ground", {width: 50, height: 50, subdivisions: 2}, scene)
		const light1 = new babylon.HemisphericLight("light1", new babylon.Vector3(5, 5, 0), scene)
		const light2 = new babylon.PointLight("light2", new babylon.Vector3(0, 5, -5), scene)

		mesh.physicsImpostor = new PhysicsImpostor(mesh, PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.1}, scene)
		mesh.translate(new babylon.Vector3(0, -1, 0), 10)

		light1.intensity = 0.4
		light2.intensity = 0.4
	}

	async destructor() {}
}
