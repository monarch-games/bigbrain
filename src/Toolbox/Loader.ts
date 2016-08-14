
import Logger from 'Susa/Toolbox/Logger'

/** Export abstract class as default. */
export default Loader

/**
 * Base class.
 * Loads scenes and objects.
 */
abstract class Loader {

  /** Logging utility. */
  protected readonly logger: Logger

  /**
   * Construct a new loader with options.
   */
  constructor(input: LoaderOptions) {}

  /**
   * Load an individual asset.
   */
  abstract loadAsset(input: AssetRequest)
}

/**
 * Input for creating a loader.
 */
export interface LoaderOptions {
  logger: Logger
}

/**
 * Input for loading an asset.
 */
export interface AssetRequest {
  path: string
}

/**
 * Input for loading a single asset.
 */
export interface AssetReport {}
