import { Tick } from 'Susa/Ticker';
import BabylonGame from 'Susa/BabylonGame';
import BabylonStage from 'Susa/BabylonStage';
import Entity from 'Susa/Entity';
/**
 * Entity with access to Babylon components, via the Babylon stage.
 */
declare abstract class BabylonEntity extends Entity {
    /** Game instance. Entities can start/stop the game, add/remove entities, etc. */
    protected game: BabylonGame;
    /** Stage instance. Entities can use it for rendering and access to Babylon components. */
    protected stage: BabylonStage;
    /**
     * Entity logic routine.
     */
    logic(tick: Tick): void;
}
export default BabylonEntity;
