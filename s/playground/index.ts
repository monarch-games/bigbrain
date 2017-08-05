
import Playground from "./Playground"

import Cube, {CubeEntry} from "./entities/Cube"
import Editor, {EditorEntry} from "./entities/Editor"
import Spectator, {SpectatorEntry} from "./entities/Spectator"
import Environment, {EnvironmentEntry} from "./entities/Environment"

const game = new Playground({
  window,
  canvas: document.querySelector("canvas"),
  entityClasses: {Environment, Spectator, Editor, Cube}
})

game.susa.start()

game.monarch.addEntry<EnvironmentEntry>({
  type: "Environment",
  asset: "assets/playground.babylon"
})

game.monarch.addEntry<EditorEntry>({
  type: "Editor",
  position: [0, 2, -5]
})

; (<any>window).game = game
